var fs = require('fs');

var md = `

Sample MarkDown Title
=====================

Sample subtitle
---------------------

* point
* point
* point

`;

//Creating file
fs.writeFile("sample.md", md.trim(), function(err) {
    
    console.log("File created");
    
});