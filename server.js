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
		['Projekt1', 1 ], ['Projekt2', 3], ['Projekt3', 5], ['Projekt4', 4]
	]);
});


app.get('/companyPerformance', function(req, res) {
	res.send([ 
		['Tid', 'Lisa', 'Kalle', 'Bengt'],
        ['2004', 20, 100, -10 ],
        ['2005', 12, 90, 20],
        ['2006', -32, 5, 0],
        ['2007', 13, 10, 0],
        ['2008', 20, 100, -10 ],
        ['2009', 12, 90, 20],
        ['2010', -32, 5, 0],
        ['2011', 13, 10, 0],
        ['2012', 20, 100, -10 ],
        ['2013', 12, 90, 20],
        ['2014', -32, 5, 0],
        ['2015', 13, 10, 0]
         ]);
});

app.get('/overtime', function(req, res) {
    res.send([
    ['Jan Jansson', 10, 12, 0, 5, 6, 9, 12, 30, 22, 4, 15, 7],
    ['Batman', 10, 12, 0, 5, 6, 9, 12, 30, 20, 24, 5, 5],
    ['Karl Alfred', 10, 12, 0, 5, 6, 9, 12, 31, 12, 4, 15, 7],
    ['Kalle Kula', 10, 12, 0, 5, 6, 9, 12, 30, 22, 4, 15, 7]
    
  ]);
});

app.get('/absence', function(req, res) {
    res.send([
    ['Jan Jansson', 0, 24, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['Batman', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ['Karl Alfred', 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0],
    ['Kalle Kula', 0, 0, 0, 0, 8, 0, 0, 16, 0, 40, 40, 0]
    
  ]);
});

app.get('/dagsForsalj', function(req, res) {
	res.send([
          ['Label', 'Value'],
          ['Mkr', 80]
          ]);
});

app.get('/reportedHours', function(req, res) {
  res.send([      
    ['Namn', 'Timmar'],
    ['Kalle',  120],
    ['Muhammet',  100],
    ['Ida',  15],
    ['Heggsson',  8],
    ['Sivan',  140],
    ['Bengt',  80]
  ]);
});

app.get('/unreportedHours', function(req, res) {
  res.send([      
    ['Namn', 'Antal pass'],
    ['Kalle',  5],
    ['Muhammet',  7],
    ['Ida',  0],
    ['Heggsson',  1],
    ['Sivan',  5],
    ['Bengt',  9]
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
