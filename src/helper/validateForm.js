function validateID(req, _res, next) {
  const { id } = req.params;
  if (id < 1) throw new Error('invalid id');
  if (typeof +id !== 'number') throw new Error('id must be a number');
  next();
}
module.exports = { validateID } 
