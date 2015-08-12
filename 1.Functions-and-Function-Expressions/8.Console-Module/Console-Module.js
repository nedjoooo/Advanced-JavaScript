var specialConsole = function () {

    function writeLine() {

        var message = arguments[0];

        if (arguments.length === 1) {
            consoleWrite(message);
        } else if (arguments.length > 1) {
            for(var i = 1; i < arguments.length; i++) {
                var replacedString = "{" + (i - 1) + "}";
                var replacingString = arguments[i];
                message = message.replace(replacedString, replacingString);
            }
            consoleWrite(message);
        }
    }

    function consoleWrite(str) {
        console.log(str.toString());
    }

    var self = {
        writeLine: writeLine,
        writeError: writeLine,
        writeWarning: writeLine,
        writeInfo: writeLine
    };

    return self;
}();

specialConsole.writeLine("Message: hello");
specialConsole.writeLine("Message: {0}", "hello");
specialConsole.writeLine("Object: {0}", {name: "Gosho", toString: function() {return this.name}});
specialConsole.writeError("Error: {0}", "A fatal error has occurred.");
specialConsole.writeWarning("Warning: {0}", "You are not allowed to do that!");
specialConsole.writeInfo("Info: {0}", "Hi there! Here is some info for you.");
specialConsole.writeError("Error object: {0}", { msg: "An error happened", toString: function() { return this.msg }});