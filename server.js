// require modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// initialize the app
const app = express();

// configure settings
require('dotenv').config();
require('./config/database');

// mount middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// mount routes

// listen on a port
const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express is listening on port ${port}`);
});