const express = require('express');
const arrayGen = require('./randomNumberGenerator');

const app= express();

app.set('views', __dirname + '/views/');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    let arrLength = Number(req.query.arraylength);
    let minValue = Number(req.query.minValue);
    let maxValue = Number(req.query.maxValue);
    console.log(arrayGen(arrLength, minValue, maxValue));
    res.render('index', {result: arrayGen(arrLength, minValue, maxValue)});
});

app.listen(5000, () => {
    console.log('server listening on port 5000');
});