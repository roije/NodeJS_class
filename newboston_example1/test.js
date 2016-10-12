//HANDLING MULTIPLE REQUESTS
/*
function placeAnOrder(orderNum) {

    console.log("Customer order: ", orderNum);

    cookAndDeliverFood(function() {
        console.log("Delivered food order", orderNum);
    });
}

//Simulate a 5 second operation
function cookAndDeliverFood(callback) {
    setTimeout(callback, 5000)
}

//Simulate orders web request
for(var i = 1; i <= 6; i++) {
    placeAnOrder(i);
}
*/

//THIS KEYWORD
/*
var Bob = {
    printName: function() {
        console.log(this === Bob)
    }
}

Bob.printName();

function randomFunction() {
    console.log(this === global)
}

randomFunction();
*/

//PROTOTYPE
/*
function User(name) {
    this.name = name;
    this.life = 100;
    this.giveLife = function giveLife (targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + " gave life to " + targetPlayer.name);
    }
}

var Roi = new User("Rói");
var Bob = new User("Bob");

console.log(Roi.life);
console.log(Bob.life);

Roi.giveLife(Bob);
console.log(Bob.life);
console.log(Roi.life);

//Adding new function to objects
User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " did 3 damage to " + targetPlayer.name);
}

Bob.uppercut(Roi);
console.log(Roi.life);

//Adding new property to object
User.prototype.magic = 60;
console.log(Roi.magic);
*/

//MODULES (movies.js)
/*
var movies = require('./movies');
var movies2 = require('./movies2');

movies.avatar();

movies2.theHobbit();
*/

//SHARED MODULE EXAMPLE
/*
require("./Johanne");
require("./Roi");
*/

//Module with Object Factory
/*
require("./Bob");
require("./Lars");
*/

//Core modules
/*
var fs = require("fs"); //fs is FileSystem module. For reading and writing files
fs.writeFileSync("bob.txt", "bob is life");
*/

var name = "Claus";
var age = 10;
var test = typeof name + typeof  age;
console.log(typeof name + " " +  typeof age);
console.log(typeof  test);