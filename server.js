var http = require('http');
var fs = require('fs');
var sys = require('sys');
var express = require('express');
const PORT = 8888;
const HOST = '0.0.0.0';


var app = module.exports = express.createServer();

app.use(express.static(__dirname + '/public'));

app.get('/forsaljning', function(req, res) {
	res.send([
		['Skinka', 1 ], ['Salami', 3]
	]);
});

if (!module.parent) {
    app.listen(PORT, HOST);
    console.log("Express server listening on port %d", PORT);
 }
