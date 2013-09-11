
/**
 * Module dependencies.
 */

// Library imports
var express = require('express');
var http = require('http');
var path = require('path');

// Create an Express object
var app = express();

// This app's imports and variables
var handlers_path = path.join(__dirname, '/handlers');

var routes = require(handlers_path);
var user = require(path.join(handlers_path, 'user.js'));

// Import database settings
var models_path = path.join(__dirname, '/handlers');
app.mongoose = require(models_path);

// Config variables
app.set('port', process.env.PORT || 8000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// Middlewares
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('process.env.COOKIE_SECRET'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'site')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Routes for the app
app.get('/', routes.index);
app.get('/users', user.list);


// Finally, create the server
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
