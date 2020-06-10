const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
//const path = require('path');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended : true }));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', {weather: null, error: null});
});

app.post('/', function(req, res) {
        let city = req.body.city;
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=446cc30bc37be1228e1d55b09335aeb6`

        request(url, function (err, response, body) {
        if(err){
            res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
            let weather = JSON.parse(body)
            if(weather.main == undefined){
                res.render('index', {weather: null, error: 'Error, please try again'});
            } else {
                let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                res.render('index', {weather: weatherText, error: null});
            }
        }
    });
})

app.listen(4000, function() {
    console.log('Example app listening on port 4000!');
});