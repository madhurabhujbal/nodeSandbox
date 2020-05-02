const express = require('express');
const arrayGen = require('./randomNumberGenerator');
const arrayOperations = require('./arrayOperations');

const app= express();

app.set('views', __dirname + '/views/');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    let arrLength = Number(req.query.arraylength);
    let minValue = Number(req.query.minValue);
    let maxValue = Number(req.query.maxValue);
    let resultArray = arrayGen(arrLength, minValue, maxValue);
    let resultMinValue = arrayOperations().getMinValue(resultArray);
    let resultMaxValue = arrayOperations().getMaxValue(resultArray);
    res.render('index', {result: resultArray, arrayMinValue: resultMinValue, arrayMaxValue: resultMaxValue});
});

app.listen(5000, () => {
    console.log('server listening on port 5000');
});