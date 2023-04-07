const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.NEXT_NEXT_PUBLIC_USER,
  password: process.env.NEXT_PUBLIC_PASSWORD,
  host: process.env.NEXT_PUBLIC_HOST,
  port: process.env.NEXT_PUBLIC_PORT,
  database: process.env.NEXT_PUBLIC_DATABASE,
});

module.exports = pool;
