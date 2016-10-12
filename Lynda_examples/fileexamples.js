
var fs = require('fs');
var path = require('path');

//Writing to file
/*
fs.writeFile("bob.txt", "Hey there", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved");
});
*/

//Using some global objects
console.log(__dirname);
var fullpath = __filename;
console.log(fullpath);

//Printing current filename using path module
console.log(`The file i'm in is called ${path.basename(__filename)}`);

