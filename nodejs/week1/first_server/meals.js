const express = require('express');
//import meals from './array.js';
const array = require('./array.js');
const port = 3000;

const app = express();
app.get('/meal', (req, res) => {
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    return randomMeal;
    console.log(randomMeal)
});

app.listen(port)