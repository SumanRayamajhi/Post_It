const express = require("express");
const app = express();
const pool = require("./db");
const PORT = 5000;

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/posts", async (req, res) => {
  try {
    const newPost = req.body;
    const result = await pool.query(
      `INSERT INTO posts (created_at, updated_at, title, content) VALUES ($1, $2, $3, $4) RETURNING *`,
      [newPost.created_at, newPost.updated_at, newPost.title, newPost.content]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// get all posts
app.get("/posts", async (req, res) => {
  try {
    const result = await pool.query(`select * from posts`);

    res.status(200).send(result.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get post by id
app.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getDataById = await pool.query(
      "SELECT * FROM posts   WHERE post_id = $1",
      [id]
    );
    res.json(getDataById.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update/edit post
app.put("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { created_at, updated_at, title, content } = req.body;
    const postQuery = `UPDATE posts SET created_at=$1, updated_at=$2, title=$3, content=$4 WHERE post_id=$5`;
    const result = await pool.query(postQuery, [
      created_at,
      updated_at,
      title,
      content,
      id,
    ]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//delete
app.delete("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletePost = await pool.query(`DELETE FROM posts WHERE post_id=$1`, [
      id,
    ]);
    res.json(deletePost.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
