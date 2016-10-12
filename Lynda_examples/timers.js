var waitTime = 3000;
var currentTime = 0;
var waitinterval = 10;
var percentWaited = 0;

function writeWaitingPercent(p) {
 
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting... ${p}%`);
    
};

var interval = setInterval(function() {
    
    currentTime += waitinterval;
    percentWaited = Math.floor((currentTime/waitTime) * 100);
    writeWaitingPercent(percentWaited);
    
}, waitinterval);

setTimeout(function() {
    
    clearInterval(interval);
    writeWaitingPercent(100);
    console.log("\ndone");
    
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);