// Create 2 functions person, animal
// one created via a function expression
// one created via a function declaration
// when caling the function, you should be able to specify
// the name of the person and the animal.
// the function should return the person or animals name
var person = function (name) {
	return name;
}

var declFunc = animal("Crocodile");
function animal (name) {
	return name;
}

var expFunc = person("Bob");

console.log(declFunc);
console.log(expFunc);