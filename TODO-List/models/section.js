var models = models || {};

(function(scope) {
    var _this;
    function Section(title) {
        this.title = title;
        this._items = [];
        _this = this;
    }

    Section.prototype.addItem = function addItem(item) {
        this._items.push(item);
    };

    Section.prototype.addToDom = function addToDom(selector) {
        var _this = this;
        var sectionsWrapper = document.querySelector(selector);
        var section = document.createElement('section');
        var sectionTitle = document.createElement('h2');
        sectionTitle.innerHTML = this.title;
        section.appendChild(sectionTitle);

        var ul = document.createElement('ul');
        section.appendChild(ul);
        this._items.forEach(function(item) {
            item.addToDom(ul);
        });

        var itemInput = document.createElement('input');
        itemInput.type = 'text';
        itemInput.className = 'item-input';

        var itemButton = document.createElement('button');
        itemButton.className = 'item-button';
        itemButton.innerText = '+';

        itemButton.addEventListener('click', function(ev) {
            var content = this.parentElement.getElementsByClassName('item-input')[0].value;
            var item = new models.Item(content);
            _this.addItem(item);
            var ul = this.parentElement.getElementsByTagName('ul')[0];
            item.addToDom(ul);
        });

        section.appendChild(itemInput);
        section.appendChild(itemButton);

        sectionsWrapper.appendChild(section);

    };

    scope.getSection = function(title) {
        return new Section(title);
    }
})(models);