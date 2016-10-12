//Move logs directory from assets directory to same directory as this file (directories.js)

var fs = require('fs');
/*
fs.renameSync("./assets/logs", "./logs");

console.log("Moved");
*/

//Delete assets and logs directories
/*
fs.rmdir("./testdir", function(err) {
    if(err) {
        throw err;
    }
    
    console.log("Testdir dir removed!");
});
*/

//Deleting not empty folder
/*
fs.readdirSync("./logs").forEach(function (file) {
    fs.unlinkSync("./logs/" + file);
})

fs.rmdir("./logs", function(err) {
   if(err) {
       throw err;
   } 
    
    console.log("Logs dir removed!");
});
*/
