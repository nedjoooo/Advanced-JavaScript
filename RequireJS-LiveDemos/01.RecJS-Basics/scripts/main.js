define('main', function() {
    var btn = document.createElement('button');
    btn.onclick = function() {
        var log = require(['logger'], function(log) {
            log.sayHello();
        });
    };
    btn.textContent = 'Click me!';
    document.body.appendChild(btn);
});