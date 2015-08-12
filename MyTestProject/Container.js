var element = element || {};

(function(element) {
    function Container(title) {
        Element.call(this, title);
    }

    Container.extends(Element);

    Container.prototype._buildHtmlElement = function() {
        var header = document.createElement('h1');
        header.innerHTML = this._title;

        var div = document.createElement('div');
        div.appendChild(header);

        var input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Title...';
        input.name = 'sectionTitle';

        var button = document.createElement('button');
        button.innerHTML = 'New Section';
        button.name = 'addSectionButton';

        var container = document.createElement('section');
        container.appendChild(header);
        container.appendChild(div);
        container.appendChild(input);
        container.appendChild(button);
        container.id = 'container';

        this._htmlElement = container;
    };

    element.getContainer = function(title) {
        return new Container(title);
    }
})(element);