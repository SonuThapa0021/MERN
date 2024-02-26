const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'});

require('./db/conn');
app.use(express.json());

// we  link the router files to make our route easy
app.use(require('./Router/auth'));

// const User = require('./Model/userSchema')

const PORT = process.env.PORT || 3000;

// Middleware
const middleware = (req, res, next) => {
    console.log(`hello my middleware`);
    next();
}

app.get('/', (req, res) => {
    res.send(`Hello Word From the server;`)
});

app.get('/about', middleware, (req, res) => {
    res.send(`Hello Word From the server About;`)
});

app.get('/Contact', (req, res) => {
    res.cookie("Test","Thapa")
    res.send(`Hello Word From the server Contac;`)
});

app.get('/SignIn', (req, res) => {
    res.send(`Hello Word From the server SignIn;`)
});

app.get('/SignUp', (req, res) => {
    res.send(`Hello Word From the server SignUp;`)
});

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})