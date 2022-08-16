const express = require('express');
const app = express();

const morgan = require('morgan');

const database = require('./config/database');
database();

//settings
app.set('port', process.env.PORT || 3000);
require("dotenv").config();

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use("/auth", require('./routes/auth-routes'));

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
}) ;