"use strict"

// By using closure and the Module pattern
// Create an object called person
// It should have a name, lastName, cpr, phoneNumber and email.
// they should all be private members

// return an object with getters and setters to the private variables

class Person {
	constructor() {
		this.name = "Bob";
		var age = this.setAge(23);
	}

	getAge() {
		return this.age;
	}

	setAge(x) {
		this.age = x;
	}
}

var p = new Person();
console.log(p.name);
console.log(p.age);

