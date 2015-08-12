function testContext() {
    return this;
}

console.log("•	From the global scope");
console.log(testContext());

function SecondTest(name) {
    this.name = name;
    testContext.apply(this, arguments);
}

console.log();
console.log("•	Inside another function");
console.log(SecondTest());

SecondTest.prototype = new testContext();

var pesho = new SecondTest("Pesho");

console.log();
console.log("•	As an object (for example, using new testContext())");
console.log(pesho);
