// This is a synchronous example

fs = require('fs'); 

data = fs.readdirSync('/Users/clbo/Documents/test'); 

console.log('data:', data); 

console.log("this comes after"); 


