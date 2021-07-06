require('dotenv').config();
const http = require('http');
const express = require('express');
const morgan = require('morgan');
const es6Renderer = require('express-es6-template-engine');
const app = express();
const server = http.createServer(app);
const PORT = 3000;
const HOST = 'localhost';
const logger = morgan('dev');

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(logger);
server.listen(PORT, HOST, () => {console.log(`Listening at http://${HOST}:${PORT}`)})

