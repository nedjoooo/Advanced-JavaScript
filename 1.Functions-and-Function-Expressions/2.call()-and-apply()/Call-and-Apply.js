function printArgsInfo() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i] + " (" + typeof arguments[i] + ")");
    }
}

console.log(printArgsInfo.call());
console.log();

console.log(printArgsInfo.call(2, 3, 2.5, -110.5564, false));
console.log();

console.log(printArgsInfo.apply());
console.log();

console.log(printArgsInfo.apply(this, ["Hello", 5, 5.4]));
console.log();
