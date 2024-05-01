const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello New Paltz!')
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});