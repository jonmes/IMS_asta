const express = require('express');
const app = express();

const errorMiddleware = require('./middlewares/error')

const auth = require('./routes/auth');

app.use(express.json());

// Import all routes

const products = require('./routes/product');


app.use('/api/v1/', products);
app.use('/api/v1/', auth);


// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app