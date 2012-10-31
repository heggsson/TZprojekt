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

app.get('/report', function(req, res) {
  res.send([
      ['Day', 'Schemalagda h', 'Rapporterade h'],
          ['Måndag', 800, 400],
          ['Tisdag', 650, 475],
          ['Onsdag', 1000, 999],
          ['Torsdag', 765, 540],
          ['Fredag', 1030, 540]
  ]);
});

app.get('/users', function(req, res) {
  res.send([
    ['x', 'Aktiva', 'Orapporterade pass', 'Inaktiva'],
    ['Januari',   100,       111,       12],
    ['Februari',  120,       50,         20],
    ['Mars',   125,       88,           5],
    ['April',   120,       20,         10],
    ['Maj',   98,       96,           10],
    ['Juni',   100,       120,           27],
    ['Juli',   100,       111,       12],
    ['Augusti',  120,       50,         20],
    ['September',   125,       88,           5],
    ['Oktober',   120,       20,         10],
    ['November',   98,       96,           10],
    ['December',   100,       120,           27]
  ]);
});


if (!module.parent) {
    app.listen(PORT, HOST);
    console.log("Express server listening on port %d", PORT);
 }
