const express = require('express');
const resultArray = require('./generateNumber');

const app= express();

app.set('views', __dirname + '/views/');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    let arrLength = req.query.arraylength;
    let minValue = req.query.minValue;
    let maxValue = req.query.maxValue;
    res.render('index', {result:"[ my array]"});
});

app.listen(5000, () => {
    console.log('server listening on port 5000');
});