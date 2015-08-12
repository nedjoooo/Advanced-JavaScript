var domModule = function() {

    function appendChild(parent, element) {

        var findedElement = parent;
        var appenden = document.querySelector(element);

        appenden.appendChild(findedElement);
    };

    function removeChild(parent, child) {

        var removedParent = document.querySelector(parent);
        var removeElement = removedParent.querySelector(child);

        removedParent.removeChild(removeElement);
    };

    function addHandler(element, eventType, expressionType) {

        var elements = document.querySelectorAll(element);
        var event = eventType;
        var expression = expressionType;

        for (i = 0; i < elements.length; i++) {
            elements[i].addEventListener(event, expression);
        }
    };

    function retrieveElements(element) {

        var elements = document.querySelectorAll(element);

        return elements;
    }

    var self = {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        retrieveElements: retrieveElements
    };

    return self;
}();

var liElement = document.createElement("li");
domModule.appendChild(liElement,".birds-list");
domModule.removeChild("ul.birds-list","li:first-child");
domModule.addHandler("li.birds", 'click', function(){ alert("I'm a bird!") });
var elements = domModule.retrieveElements(".bird");
console.log(elements);