const express = require('express');
const array = require('./array.js');
const port = 3000;

const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>')
})

app.get('/meal', (req, res) => {
    const randomNumber = Math.floor(Math.random() * array.meals.length);
    console.log(randomNumber);
    const randomMeal = array.meals[randomNumber];
    res.send(randomMeal)
    return randomMeal;
});


app.listen(port, () => console.log('the webserver is running on port:' + port));