// create an object called person using an object literal
// the object should have the properties:
// name, age, gender
var person = {
	name : "Bob",
	age : 24,
	gender : "male"
};

// print the whole object, the name, the age and the gender 
// in 4 console.log statements
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.gender);

// change the persons name, age and gender
person.name = "Claus";
person.age = 25;
person.age = "female"

// Create a second object called animal using an Object literal
// It should should have the 2 properties name and age.
// name and age should be private, 
// and should be accessible through public getters and a setters
console.log("-----------------------------------")
var animal = {
	
	fields : (function() 
	{
		var name = " ";
		var age; 
		return {
			setName: function(newName) {
				name = newName;
			},

			getName: function() {
				return name;
			},

			setAge: function(newAge) {
				age = newAge;
			},

			getAge: function() {
				return age;
			}
		};
	})()
};

animal.fields.setName("Panda");
animal.fields.setAge(2);

console.log(animal.fields.getName());
console.log(animal.fields.getAge());