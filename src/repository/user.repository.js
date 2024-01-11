const pool = require('../db');

async function getAllSkillsDB() {
  const client = await pool.connect();
  const sql = 'SELECT * FROM environment';
  const { rows } = await client.query(sql);
  if (!rows.length) throw new Error('is empty');
  return rows
}
async function getSkillByIDDB(id) {
  const client = await pool.connect();
  const queryText = 'SELECT * FROM environment where id = $1';
  const { rows } = await client.query(queryText, [id]);
  if (!rows.length) throw new Error(`getSkillByIDDB: id undefined`);
  return rows;
}
module.exports = { getAllSkillsDB, getSkillByIDDB };
