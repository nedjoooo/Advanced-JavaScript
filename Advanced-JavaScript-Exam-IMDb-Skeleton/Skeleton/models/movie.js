var imdb = imdb || {};

(function(scope) {
    var id = 0;
    function Movie(title, length, rating, country) {
        this._id = ++id;
        this.title = title;
        this.length = length;
        this.rating = rating;
        this.country = country;
        this._actors = [];
        this._reviews = [];
    }

    Movie.prototype.addActor = function addActor(actor) {
        this._actors.push(actor);
    };

    Movie.prototype.getActors = function getActors() {
        return this._actors;
    };

    Movie.prototype.addReview = function addReview(review) {
        this._reviews.push(review);
    };

    Movie.prototype.deleteReview = function deleteReview(review) {
        var i = this._reviews.indexOf(review);
        if(i != -1) {
            this._reviews.splice(i, 1);
        }
    };

    Movie.prototype.deleteReviewById = function deleteReviewById(id) {
        for(var i = this._reviews.length - 1; i >= 0; i--) {
            if(this._reviews[i]._id === id) {
                this._reviews.splice(i, 1);
            }
        }
    };

    Movie.prototype.getReviews = function getReviews() {
        return this._reviews;
    };

    scope._Movie = Movie;

    scope.getMovie = function(title, length, rating, country) {
        return new Movie(title, length, rating, country);
    }
}(imdb));