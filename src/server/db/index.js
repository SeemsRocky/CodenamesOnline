require('dotenv').config();
const { Pool } = require('pg');

const CREDENTIALS = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};
const pool = new Pool(CREDENTIALS);

pool.connect()
  .then(() => console.log('Connected to DB!'))
  .catch((err) => console.log(`Error connecting to DB: ${err}`));

module.exports = {
  query: (text, params) => pool.query(text, params),
};
