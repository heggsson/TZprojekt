var http = require('http');
var fs = require('fs');
var sys = require('sys');
var express = require('express');


const PORT = 8888;
const HOST = '0.0.0.0';


var app = module.exports = express.createServer();

app.use(express.static(__dirname + '/public'));


app.get('/reportedProjectHours', function(req, res) {
	res.send([
		['Projekt1', 100 ], ['Projekt2', 150], ['Projekt3', 70], ['Projekt4', 230]
	]);
});

app.get('/personal_II', function(req, res) {
    res.send([
    ['Månad', 'Arbetade timmar', 'Övertid', 'Frånvaro', 'Orapporterade timmar'],
        ['Januari',  1000, 400, 50, 10],
        ['Februari',  1200, 200, 20, 1],
        ['Mars',  800, 20, 12, 15],
        ['April',  1700, 5, 23, 4],
        ['Maj',  100, 10, 8, 22],
        ['Juni',  850, 400, 50, 10],
        ['Juli',  1000, 400, 50, 10],
        ['Augusti',  1000, 400, 50, 10],
        ['September',  1000, 400, 50, 10],
        ['Oktober',  1000, 400, 50, 10],
        ['November',  1000, 400, 50, 10],
        ['December',  1000, 400, 50, 10]
    ]);
});


app.get('/certifiedProjectHours', function(req, res) {
    res.send([
        ['Projekt1', 70 ], ['Projekt2', 120], ['Projekt3', 50], ['Projekt4', 210]
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

app.get('/projectstatus', function(req, res) {
    res.send([
    ['Vecka', 'Timmar kvar'],
    ['1', 1000],
    ['2', 950],
    ['3', 900],
    ['4', 850],
    ['5', 500],
    ['6', -10],
    ['7', -100]

        ])
});

app.get('/occupancy', function(req, res) {
    res.send([
    ['Year', 'Tillgänglighet (h)', 'Utbokat (h)'],
    ['2003', 1336060, 400361]
    ])

});

app.get('/personalHours', function(req, res) {
    res.send([
        ['Månad', 'Timmar'],
        ['Jan', 140],
        ['Feb', 148],
        ['Mar', 170],
        ['Maj', 175],
        ['Jun', 150],
        ['Jul', 167],
        ['Aug', 45],
        ['Sep', 122],
        ['Okt', 160],
        ['Nov', 174],
        ['Dec', 138]
        ])
});

app.get('/personalProjectHours', function(req, res) {
    res.send([
        ['Projekt1', 100 ], ['Projekt2', 150], ['Projekt3', 70], ['Projekt4', 230]
        ])
});

app.get('/personalOvertime', function(req, res) {
    res.send([
        ['Månad', 'Timmar'],
        ['Jan', 0],
        ['Feb', 0],
        ['Mar', 14],
        ['Maj', 15],
        ['Jun', 0],
        ['Jul', 3],
        ['Aug', 0],
        ['Sep', 0],
        ['Okt', 0],
        ['Nov', 8],
        ['Dec', 0]
        ])
});

app.get('/personalUndertime', function(req, res) {
    res.send([
        ['Månad', 'Timmar'],
        ['Jan', 10],
        ['Feb', 0],
        ['Mar', 14],
        ['Maj', 15],
        ['Jun', 24],
        ['Jul', 0],
        ['Aug', 0],
        ['Sep', 0],
        ['Okt', 16],
        ['Nov', 0],
        ['Dec', 0]
        ])
});

app.get('/personalUnreported', function(req, res) {
    res.send([
        ['Namn', 'Antal'],
        ['Heggsson',  7]
        ])
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

app.get('/projectstatuspersonal', function(req, res) {
    res.send([
    ['Vecka', 'Timmar kvar'],
    ['1', 100],
    ['2', 95],
    ['3', 90],
    ['4', 85],
    ['5', 50],
    ['6', -1],
    ['7', -10]

        ])
});


if (!module.parent) {
    app.listen(PORT, HOST);
    console.log("Express server listening on port %d", PORT);
 }


