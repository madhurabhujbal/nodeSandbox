const express = require('express');

const app= express();

app.set('views', __dirname + '/views/');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index', {name : "Madhura"});
});

app.listen(5000, () => {
    console.log('server listening on port 5000');
});