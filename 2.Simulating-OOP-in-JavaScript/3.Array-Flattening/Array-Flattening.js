Array.prototype.flatten = function() {
    var result = new Array();
    flattenInnerArrays(this);

    function flattenInnerArrays(array) {
        for(var i = 0; i < array.length; i++) {
            if(array[i] instanceof Array) {
                flattenInnerArrays(array[i]);
            } else {
                result.push(array[i]);
            }
        }
    }

    return result;

}

var array = [1, 2, 3, 4];
console.log(array.flatten());

var array = [1, 2, [3, 4], [5, 6]];
console.log(array.flatten());
console.log(array);

var array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array.flatten());
console.log(array);
