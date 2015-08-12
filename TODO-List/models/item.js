var models = models || {};

(function(scope) {
    function Item(title) {
        this.title = title;
        this._status = false;
    }

    Item.prototype.changeStatus = function changeStatus() {
        this._status = !this.status;
    };

    Item.prototype.addToDom = function(ul) {
        var item = document.createElement('li');
        item.innerHTML = '<input type = "checkbox" />' + '<span>' + this.title + '</span>';
        ul.appendChild(item);
    }

    scope.Item = Item;
})(models);