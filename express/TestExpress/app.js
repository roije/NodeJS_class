//express.js

//Sort of constructor
var express = require('express');
var app = express();

var obj = require('./lib/objects.js')
var objJSON = require('./contact.json') 
var fs = require('fs');

// template engines:
// jade, handlebars, ejs
app.set('view engine', 'ejs');

//CRUD:

//app.get(); 	//read
//app.post(); //create
//app.put();  //update
//app.delete();//delete

// route:
app.get('/', function(req, res){
	//res.send('<h1>Hello again</h1>');
    res.render('index', {title: 'Home page', name: 'Roi'});
}); //<- getting the root of the request (root:3000)

//Route
app.get('/contact', function(req, res){
    //res.send('<h1>Contact page</h1>');
    res.render('index', {title: 'Contact page', name: 'A contact'});

});

//Route
app.get('/object', function(req, res){
    //res.send('<h1>Contact page</h1>');
    res.render('index', person);

});

//Route
app.get('/object2', function(req, res){
    //res.send('<h1>Contact page</h1>');
    res.render('index', obj);

});

app.get('/json', function(req, res){
    //res.send('<h1>Contact page</h1>');
    var objJson = {"title" : "JSON OBJECT", "name" : "Roi"}
    //res.render('contact', objJson);
    //res.render('contact', objJSON);
    
    //Asyncronous way of reading object
    fs.readFile('contact.json', 'utf-8', function(err, data) 
    {
        res.render('contact', JSON.parse(data));
    })

});

app.listen(3001);

var person = {
  title: 'Bob',
    getInfo : function() {
        return 'Roi'
    }
};









/*
var http = require('http');
http.createServer(function(req, res) {
	res.write('Hello World');
	res.end();
}).listen(3000);
*/