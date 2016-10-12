var questions = [
    "What is you name?",
    "What is your fav hobby?",
    "What is your preferred programming langueage?"
];

var answers = [];

function ask(i) {
    
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write("   >   ")    
}

//Process stdout and stdin implement the stream interface

process.stdin.on('data', function(data) {

    //Add answer to answers array
    answers.push(data.toString().trim());
    
    //If there are more questions than answers, keeping asking. Else, exit process.
    if(answers.length < questions.length)
    {
        ask(answers.length);
    }
    else {
        process.exit();
    }
});

//Listen for when process is exiting
process.on('exit', function() {
    
    //Print answer and question from array
    /*
   process.stdout.write("\n\n Your answers: \n\n")
   for(var i = 0; i < questions.length; i++) 
   {
       process.stdout.write(questions[i] + " ")
       for(var j = i; j < answers.length;) 
       {
           process.stdout.write(answers[j] + "\n");
           break;
       }
   }
   */
    process.stdout.write(`Go do ${answers[1]} ${answers[0]}, you can finish writing ${answers[2]} later \n`);
    
});

ask(0);
