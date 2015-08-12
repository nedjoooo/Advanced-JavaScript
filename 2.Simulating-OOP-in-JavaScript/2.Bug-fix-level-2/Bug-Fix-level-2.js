function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}


Object.defineProperty(Person.prototype, 'fullName', {
    get: function() {
        return this.firstName + ' ' + this.lastName;
    },
    set: function(name) {
        var fullName = name.split(' ');
        this.firstName = fullName[0] || '';
        this.lastName = fullName[1] || '';
        return this.firstName + " " + this.lastName;
    }
});

var person = new Person("Peter", "Jackson");

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
person.firstName = "Michael";
console.log(person.firstName);
console.log(person.fullName);
person.lastName = "Williams";
console.log(person.lastName);
console.log(person.fullName);
person.fullName = "Alan Marcus";
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);
