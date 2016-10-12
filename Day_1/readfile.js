var fs = require('fs');

fs.readFile('index.txt', 'utf-8', function(err, data){
    console.log(data);
});

console.log('This is after the file read function');
