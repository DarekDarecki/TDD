var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var config = require('./app/config/config');
var cors = require('cors');

var app = express();


app.use(morgan('dev'));                                         // log every request to the console
app.use(cors());
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
//app.use(opbeat.middleware.express())

require('./app/router/router')(app);

var db;

if(process.env.NODE_ENV === "test"){
	db = mongoose.connect(config.test_db);
	app.listen(config.test_port);
	console.log("App listening on port "+config.test_port);
}else{
 	db = mongoose.connect(config.db);
 	app.listen(config.port);
 	console.log("App listening on port "+config.port);
}

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + config.db);
});

module.exports = app;
