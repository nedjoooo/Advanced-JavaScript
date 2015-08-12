var element = element || {};

(function(element) {
    function Section(title) {
        Element.call(this, title);
    }

    Section.extends(Element);

    Section.prototype._buildHtmlElement = function() {
        var header = document.createElement('h2');
        header.innerHTML = this._title;

        var div = document.createElement('div');
        div.appendChild(header);

        var input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Add Item...';

        var button = document.createElement('button');
        button.innerHTML = '+';

        var buttonDiv = document.createElement('div');
        buttonDiv.appendChild(input);
        buttonDiv.appendChild(button);

        var currentList = document.createElement('article');
        currentList.appendChild(div);
        currentList.appendChild(input);
        currentList.appendChild(button);

        this._htmlElement = currentList;
    }

    element.getSection = function(title) {
        return new Section(title);
    }
})(element);