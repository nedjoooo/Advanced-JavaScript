define('logger', function() {
    var object = {
        name: 'Nedjo',
        sayHello: function() {
            console.log(this.name + ' says Hello');
        }
    }
    return object;
});