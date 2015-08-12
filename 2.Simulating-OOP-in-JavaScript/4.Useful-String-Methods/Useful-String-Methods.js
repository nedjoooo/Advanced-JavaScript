String.prototype.startsWith = function(substring) {
    return this.substring(0, substring.length) == substring;
}

String.prototype.endsWith = function(substring) {
    return this.substring(this.length - substring.length, this.length) == substring;
}

String.prototype.left = function(count) {
    return this.substring(0, count);
}

String.prototype.right = function(count) {
    return this.substring(this.length - count, this.length);
}

String.prototype.padLeft = function(count) {
    var character = arguments[1] || ' ';
    if(this.length < count) {
        var result = new Array(count - this.length + 1).join( character).toString();
        return result + this;
    }

    return this.toString();
}

String.prototype.padRight = function(count) {
    var character = arguments[1] || ' ';
    if(this.length < count) {
        var result = this + new Array(count - this.length + 1).join( character).toString();
        return result;
    }

    return this.toString();
}

String.prototype.repeat = function(count) {
    return new Array(count + 1).join(this).toString();
}

var example = "This is an example string used only for demonstration purposes.";
console.log(example.startsWith("This"));
console.log(example.startsWith("this"));
console.log(example.startsWith("other"));

console.log(example.endsWith("poses."));
console.log(example.endsWith ("example"));
console.log(example.startsWith("something else"));

console.log(example.left(9));
console.log(example.left(90));

console.log(example.right(9));
console.log(example.right(90));

var example = "abcdefgh";
console.log(example.left(5).right(2));

var hello = "hello";
console.log(hello.padLeft(5));
console.log(hello.padLeft(10));
console.log(hello.padLeft(5, "."));
console.log(hello.padLeft(10, "."));
console.log(hello.padLeft(2, "."));

console.log(hello.padRight(5));
console.log(hello.padRight(10));
console.log(hello.padRight(5, "."));
console.log(hello.padRight(10, "."));
console.log(hello.padRight(2, "."));

var character = "*";
console.log(character.repeat(5));
console.log("~".repeat(3));

console.log("*".repeat(5).padLeft(10, "-").padRight(15, "+"));