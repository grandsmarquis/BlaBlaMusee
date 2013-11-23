
/**
** Global variables
**/
recordTime = 2; //Recording time in seconds                                                                          
language = "fr/FR" //Speech language                                                                                 
tmpFolder = "./tmp/" // Path to store tmp things. Could be "/tmp/blabla" to be more Linux friendly!                  
ID = 0;

/**
** Module dependencies.
**/

var express = require('express');
var routes = require('./routes');
var moderation = require('./routes/moderation');
var info = require('./routes/info');
var http = require('http');
var path = require('path');

twitts = ["Ceci est un test", "ceci est un test2", "ceci est un test3"];

var stt = require('./stt.js');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('theKeyyouneed2411190'));
app.use(express.session());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/moderation', moderation.index);
app.get('/info', info.index);
app.get('/about', info.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
