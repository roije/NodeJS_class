var fs = require('fs');
var path = require('path');

/*
var contents = fs.readFileSync("./lib/somefile.txt", "UTF-8");

console.log(contents);
*/

//Read all files in directory
fs.readdir("./lib", function(err, files) 
{
    files.forEach(function(fileName) 
    {
        var file = path.join(__dirname, "lib", fileName);
        var stat =  fs.statSync(file);
        if(stat.isFile()) 
        {
            fs.readFile(file, "UTF-8", function(err, contents) {
                console.log(contents);
            });
        }
    });
})