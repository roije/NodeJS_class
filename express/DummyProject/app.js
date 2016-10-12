//express.js

var express = require('express');
var app = express();

app.get(); //read. Get request in browser

//Route
app.get('/', function(req, res){
    res.send('<h1>Hello World</h1>');

});



app.listen(3001);


/*
app.post(); //create

app.put(); //update

app.delete(); //delete
*/