var imdb = imdb || {};

(function(scope) {
    var id = 0;
    function Genre(name) {
        this._id = ++id;
        this.name = name;
        this._movies = [];
    }

    Genre.prototype.addMovie = function addMovie(movie) {
        this._movies.push(movie);
    };

    Genre.prototype.deleteMovie = function deleteMovie(movie) {
        var i = this._movies.indexOf(movie);
        if(i != -1) {
            this._movies.splice(i, 1);
        }
    };

    Genre.prototype.deleteMovieById = function deleteMovieById(id) {
        for(var i = this._movies.length - 1; i >= 0; i--) {
            if(this._movies[i]._id === id) {
                this._movies.splice(i, 1);
            }
        }
    };

    Genre.prototype.getMovies = function getMovies() {
        return this._movies;
    };

    scope.getGenre = function(name) {
        return new Genre(name);
    }

}(imdb));