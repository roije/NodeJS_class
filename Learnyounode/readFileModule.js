
var fs = require('fs');
var path = require('path')

exports.getFiles = function(thepath, extension) 
{
    fs.readdir(thepath, function(err, items)
    {    
        for (var i=0; i< items.length; i++) 
        {
            var ext = path.extname(items[i]);
            if(ext === extension) 
            {
                console.log(items[i]);
            }
        }
    });
} 
    


