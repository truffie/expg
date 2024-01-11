const { getAllSkillsDB, getSkillByIDDB } = require('../repository/user.repository');
async function getAllSkills() {
  const data = await getAllSkillsDB();
  return data;
}

async function getSkillByID(id) {
  const data = await getSkillByIDDB(id);
  return data;
}
module.exports = { getAllSkills, getSkillByID }