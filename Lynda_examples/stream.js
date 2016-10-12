var fs = require("fs");

//Readable stream

var stream = fs.createReadStream("./chatlog.txt", "UTF-8");

var data = "";

//Listener: listens one time for a data event on the stream
stream.once("data", function() {
    console.log("\n\n\n");
    console.log("Started reading file...");
    console.log("\n\n\n");
});

//Listener: listens for every data event on the stream and will gather all chunks of data and concatenate the chunks to the data variable
stream.on("data", function(chunk) {
   
    process.stdout.write(` chunk: ${chunk.lenght} | `);
    
    data += chunk;
    
});

//Listener: listens for the end event of the stream
stream.on("end", function() {
    console.log("\n\n\n");
    console.log(` Finished reading file ${data.lenght}`);
    console.log("\n\n\n");
});