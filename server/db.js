const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "HanumateNamo7",
  host: "localhost",
  port: 5432,
  database: "postit",
});

module.exports = pool;
