Object.prototype.extends = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};

var Element = (function() {
    function Element(title) {
        this._setTitle(title);
    }

    Element.prototype._setTitle = function(title) {
        if(!title) {
            throw new ReferenceError("Title can not be empty!");
        }

        this._title = title;
    };

    Element.prototype._buildHtmlElement = function() {
        this._htmlElement = null;
    };

    Element.prototype.getHtmlElement = function() {
        if(!this._htmlElement) {
            this._buildHtmlElement();
        }

        return this._htmlElement;
    };

    Element.prototype.addToDom = function(parent) {
        if(!this._htmlElement) {
            this._buildHtmlElement();
        }

        parent.querySelector('div').appendChild(this._htmlElement);
    };

    return Element;
})();