require('dotenv').config();
const PORT = process.env.LOCALPORT
const app = require('./src/app');

app.listen(PORT, () => {
  console.log(`server is running on:${PORT}`);
})