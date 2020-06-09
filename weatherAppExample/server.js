const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.send("Hello World!!!");
});

app.listen(4000, function(req, res) {
    console.log('Example app listening on port 4000!');
});