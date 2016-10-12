var fs = require('fs');
var colors = require('colors');

var questions = [
    'name',
    'version',
    'description',
    'entry point',
    'author',
    'license'
];

var answers = {

};


function ask(i) {
                
    process.stdout.write(questions[i].bgGreen + ' > '.yellow);
        
}

process.stdin.on('data', function(data) 
{    
    //Save answer in answers object. Creates a property with same name as index value in questions.
    answers[questions[Object.keys(answers).length]] = data.toString().trim();
    
    //If there are more questions to ask
    if(Object.keys(answers).length < questions.length) {
        ask(Object.keys(answers).length)
    }
    else {
        //Could write to file with asyncronous here 
        process.exit();
    }
});

process.on('exit', function() {
    
    //Write answers object to .json file. 
    //process.stdout.write('Is this OK? (y / n)? ');

    //Need sync in 'exit'
    
    fs.writeFileSync('./package.json', JSON.stringify(answers, null, 4) , 'utf-8');

})

ask(0);

