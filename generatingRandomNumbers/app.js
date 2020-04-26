const express = require('express');

const app= express();

app.set('views', __dirname + '/views/');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index', {arraylength : "9", minValue : "4", maxValue : "56"});
});

app.listen(5000, () => {
    console.log('server listening on port 5000');
});