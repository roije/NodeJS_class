//Function / Methods

//Function expressin
var add = function(a, b) {
	return a + b;
};

console.log(add(2,3));

//Function declaration
function multiply(a,b) {
	return a*b;
}

var result = multiply(2,5);
console.log(result);

//Anonymous function
function readFile(a,b){
	console.log(a);
	b();
}

readFile('test', function() {
	console.log('here i write out the content of the text')
});

(function IIFE() {
	console.log("I invoked myself!");
}());

//Scope
//Lexical or function scope
var x = function() {
	var a = "hello";
	b = "bob";
}