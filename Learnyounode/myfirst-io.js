/*
var fs = require('fs');
var totalLines = 0;

var file = fs.readFileSync('./' + process.argv[2]);

totalLines = file.toString().split('\n').length -1;
console.log(totalLines);
*/

var fs = require('fs');

var filename = process.argv[2];

file = fs.readFileSync(filename);

contents = file.toString();

console.log(contents.split('\n').length - 1);
