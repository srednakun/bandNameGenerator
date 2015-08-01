'use strict';

var Adjective = require('./lib/adjective.js');
var Verb = require('./lib/verb.js');
var Noun = require('./lib/noun.js');
var getRandomWord = require('./lib/getRandomWord.js');
var postRandomWord = require('./lib/postRandomWord.js');

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

//make sure dir has 2 underscores before it! __
app.use(express.static(__dirname + '/app'));

//make an instance of that object
var adjective = new Adjective;

var verb = new Verb;

var noun = new Noun;

app.get('/adjective', function(req, res) {
	res.json(getRandomWord(adjective));
});

app.post('/adjective', function(req, res) {
	//console.log(req.body);
	res.json(postRandomWord(req.body.word, adjective));
});

app.get('/verb', function(req, res) {
	res.json(getRandomWord(verb));
});

app.post('/verb', function(req, res) {
	//console.log(req.body);
	res.json(postRandomWord(req.body.word, verb));
});

app.get('/noun', function(req, res) { 
	res.json(getRandomWord(noun));
});

app.post('/noun', function(req, res) {
	//console.log(req.body);
	res.json(postRandomWord(req.body.word, noun));
});

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/script.js', function(req, res) {
	res.sendFile(__dirname + '/script.js');
});

app.listen(port, function() {
	console.log('server started on port ' + port);
});