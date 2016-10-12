var fs = require('fs');

//Printing every files in a directory synchronously
var files = fs.readdirSync('./lib');

console.log(files);

//Printint every files in a directory asynchronoysly
fs.readdir('./lib', function(err, files) {
   if(err) {
       throw err;
   } 
    else {
        console.log(files);
    }
});
console.log("Reading files...")