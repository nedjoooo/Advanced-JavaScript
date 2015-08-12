function addElementInContainer(e) {
    var name = e.target.name;
    var parent = e.target.parentNode;
    var input = parent.querySelector('input[name=sectionTitle]');
    var title = input.value;
    element.getSection(title).addToDom(parent);

    if(input) {
        input.value = '';
    }
}


var container = element.getContainer('TODO List');
var body = document.body;
body.appendChild(container.getHtmlElement());
body.addEventListener('click', addElementInContainer);