require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const app = express();

const PORT = 3000;
const HOST = 'localhost';
const logger = morgan('dev');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.listen(PORT, HOST, () => {
  console.log(`Listening at http://${HOST}:${PORT}`);
});
