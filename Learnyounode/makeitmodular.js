var myModule = require('./readFileModule.js');

var path = process.argv[2];
var extension = "." + process.argv[3];

myModule.getFiles(path, extension);