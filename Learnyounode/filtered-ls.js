
var fs = require('fs');
var path = require('path')

var thePath = process.argv[2];
var fileExtension = "." +process.argv[3];

fs.readdir(thePath, function(err, items){
    
    for (var i=0; i< items.length; i++) 
    {
        var ext = path.extname(items[i]);
        if(ext === fileExtension) 
        {
            console.log(items[i]);
        }
    }
});

