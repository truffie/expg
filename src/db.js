require('dotenv').config();
const PORT = process.env.DBPORT
const PASSWORD = process.env.PASSWORD

const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: PORT,
  password: PASSWORD,
  user:  'postgres',
  database: 'skills'
});

module.exports = pool;