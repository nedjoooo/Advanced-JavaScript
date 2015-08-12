var imdb = imdb || {};

(function(scope) {
    var id = 0;
    function Theatre(title, length, rating, country, isPuppet) {
        this._id = ++id;
        scope._Movie.call(this, title, length, rating, country);
        this.isPuppet = isPuppet;
    }

    Theatre.extends(scope._Movie);

    scope.getTheatre = function(title, length, rating, country, isPuppet) {
        return new Theatre(title, length, rating, country, isPuppet);
    };
}(imdb));