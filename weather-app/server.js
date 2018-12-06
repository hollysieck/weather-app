/** Advanced JS - Building a Weather App With Node Tutorial https://codeburst.io/build-a-weather-website-in-30-minutes-with-node-js-express-openweather-a317f904897b **/

const express = require('express')
const app = express()
const bodyParser = require('body-parser');

var weather;


app.set('view engine', 'ejs') // requiring the ejs templating engine that we installed
app.use(express.static('public')); //this line allows the file access the public folder which has the CSS, and other static files.
app.use(bodyParser.urlencoded({ extended: true })); // using the body parser that we installed - middleware - allows us to use the name/value pairs  stored on the req-body object


// GET ROUTE - this 'gets" the url we are focusing on, and renders the index file on it
app.get('/', function (req, res) {   // the slash means that we are exclusivley focusing on the / url.
	//res.send('Hello World!') //og code -prints "hello world" onto the screnn
	res.render('index'); //new code - res.render will render the view of the index.ejs file and render it into html that the browser/client can read. 
})

//creates a server
app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})



//creating post request 
const request = require('request');
const apiKey = 'b3ff0b90205e0d9a19f477d819ad9c27';
//...
//...
app.post('/', function (req, res) {
  let city = req.body.city; //get the city that they typed in 
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}` //add the city to the url to access OpenMap and get that citys weather
request(url, function (err, response, body) {
    if(err){ //error message - make sure the API is working
      res.render('index', {weather: null, error: 'Error, please try again'});
    } else { //now that we don't have an API 
      let weather = JSON.parse(body) //parse JSON from API into usable JS
      if(weather.main == undefined){ //if what they typed in isn't a city
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
}) 