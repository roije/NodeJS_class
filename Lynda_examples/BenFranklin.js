
//Requiring custom made Person module
var Person = require("./lib/Person");

var ben = new Person("Ben Franklin");
var george = new Person("George Washington")

ben.on('speak', function(said) {
    console.log(`${this.name} -> ${said}`);
});

george.on('speak', function(said) {
    console.log(`${this.name}: ${said}`);
});

ben.emit('speak', 'You may delay, but time will not');
george.emit('speak', 'It is far better to be alone, than be in bad company.');