var readline = require('readline');
var fs = require('fs');

var rl = readline.createInterface(process.stdin, process.stdout);
var realPerson = {
  name: '',
    sayings: []
};

rl.question("What is the name of real person? ", function(answer) {
    
    realPerson.name = answer;
    
    //
    // TODO: Create new Markdown file
    //
    
    //With stream
    var stream = fs.createWriteStream(realPerson.name + ".md");
    stream.write(`${realPerson.name}\n==============\n\n`);
    
    /* Original
    fs.writeFileSync(realPerson.name + ".md", `${realPerson.name}\n==============\n\n`);
    */
    
    rl.setPrompt(`What would ${realPerson.name} say?` );
    
    rl.prompt();
    
    rl.on('line', function(saying) {
        
        /*
        realPerson.sayings.push(saying.trim());
        
        //
        // TODO: Append Sayings to that markdown file
        //
        
        //Using stream
        stream.write(`* ${saying.trim()}\n`);
        */
        
        //Original
        //fs.appendFile(realPerson.name + ".md", `* ${saying.trim()}\n`)
        
        if(saying.toLowerCase().trim() === 'exit') {
            stream.close();
            rl.close();
        }
        else {
            
            realPerson.sayings.push(saying.trim());
            //Using stream
            stream.write(`* ${saying.trim()}\n`);
            rl.setPrompt(`What else would ${realPerson.name} say? (exit to leave)`);

            rl.prompt();    
        }
        
    });
});

rl.on('close', function() {
   
    console.log("%s is real person that says %j", realPerson.name, realPerson.sayings);
    process.exit();
    
});