// An asynchronous example using a callback function

fs = require('fs');

fs.readdir('./bob.txt', function(err, data) {
    console.log('data:', data);
});

console.log("this comes after");
