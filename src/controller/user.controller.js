const route = require('express').Router();
const { buildResponse } = require('../helper/buildResponse');
const { getAllSkills, getSkillByID } = require('../service/user.service');
const { validateID } = require('../helper/validateForm');

route.get('/', async (_req, res) => {
  try {
    const data = await getAllSkills();
    buildResponse(res, 200, data)
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
})
route.get('/:id', validateID, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getSkillByID(id);
    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
})
module.exports = route;
