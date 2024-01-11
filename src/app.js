const express = require('express');
const bodyParser = require('body-parser');
const routeUser = require('../src/controller/user.controller');

const app = express();
app.use(bodyParser.json());


app.use('/user', routeUser);



app.use((error, _req, res, _next) => {
  res.send(error.message);
})
module.exports = app;