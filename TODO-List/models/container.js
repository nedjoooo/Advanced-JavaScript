var models = models || {};

(function(scope) {
    var _this;
    function Container(title) {
        this.title = title;
        this._sections = [];
        _this = this;
    }

    Container.prototype.addSection = function addSection(section) {
        this._sections.push(section);
    };

    Container.prototype.addToDom = function addToDom(selector) {
        var wrapper,
            container,
            sectionsDiv;

        wrapper = document.querySelector(selector);
        container = document.createElement('div');
        container.id = 'container';

        sectionsDiv = document.createElement('div');
        sectionsDiv.id = 'sections';

        container.appendChild(addTitle(this.title));
        container.appendChild(sectionsDiv);
        container.appendChild(addFooter());

        wrapper.appendChild(container);
    };

    function addTitle(title) {
        var containerTitle = document.createElement('h1');
        containerTitle.innerText = title;
        return containerTitle;
    }

    function addFooter() {
        var footer,
            input,
            button;

        footer = document.createElement('footer');
        input = document.createElement('input');
        input.id = 'section-input';

        button = document.createElement('button');
        button.id = 'section-button';
        button.innerText = 'New Section';
        button.addEventListener('click', function(ev) {
            var sectionTitle = document.getElementById('section-input').value;
            var section = models.getSection(sectionTitle);
            _this.addSection(section);
            section.addToDom('#sections');
        });

        footer.appendChild(input);
        footer.appendChild(button);

        input = undefined;

        return footer;
    };

    scope.getContainer = function(title) {
        return new Container(title);
    }
})(models);
