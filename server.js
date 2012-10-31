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
		['Skinka', 1 ], ['Salami', 3], ['Brieost', 5], ['Kalkon', 4]
	]);
});


app.get('/companyPerformance', function(req, res) {
	res.send([ 
		['Year', 'Sales', 'Expenses'],
        ['2004', 10000, 12000],
        ['2005', 12000, 900],
        ['2006', 9000, 5000],
        ['2007', 13000, 10000]
         ]);
});


app.get('/dagsForsalj', function(req, res) {
	res.send([
          ['Label', 'Value'],
          ['Mkr', 80]
          ]);
});



if (!module.parent) {
    app.listen(PORT, HOST);
    console.log("Express server listening on port %d", PORT);
 }
