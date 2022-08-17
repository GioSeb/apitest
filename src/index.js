const express = require('express');
const app = express();

const morgan = require('morgan');

const database = require('./config/database');
const logger = require('./logger/logger');
database();

//settings
app.set('port', process.env.PORT || 3000);
require("dotenv").config();

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use("/auth", require('./routes/auth-routes'));

//
const port = process.env.PORT || 3000;
app.listen(port, () => {
    logger.log('info', `server on port: ${port}`);
}) ;