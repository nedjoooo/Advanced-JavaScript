var imdb = imdb || {};

(function (scope) {
	function loadHtml(selector, data) {
		var container = document.querySelector(selector),
			moviesContainer = document.getElementById('movies'),
			detailsContainer = document.getElementById('details'),
			genresUl = loadGenres(data),
            moviesUI = document.getElementById('movies');

		container.appendChild(genresUl);

		genresUl.addEventListener('click', function (ev) {
			if (ev.target.tagName === 'LI') {
				var genreId,
					genre,
					moviesHtml;

				genreId = parseInt(ev.target.getAttribute('data-id'));
				genre = data.filter(function (genre) {
					return genre._id === genreId;
				})[0];

				moviesHtml = loadMovies(genre.getMovies());
				moviesContainer.innerHTML = moviesHtml.outerHTML;
				moviesContainer.setAttribute('data-genre-id', genreId);
			}
		});

		// Task 2 - Add event listener for movies boxes
        moviesUI.addEventListener('click', function(ev) {
            if(ev.target.tagName === 'LI') {
                var movieId,
                    movie,
                    actorsHtml,
                    reviewsHtml;

                movieId = parseInt(ev.target.getAttribute('data-id'));
                for(var i=0; i < data.length; i++) {
                    for(var j = 0; j < data[i]._movies.length; j++) {
                        if(movieId === data[i]._movies[j]._id) {
                            movie = data[i]._movies[j];
                            break;
                        }
                    }
                }

                actorsHtml = loadActors(movie.getActors());
                reviewsHtml = loadReviews(movie.getReviews());
                detailsContainer.innerHTML = actorsHtml.outerHTML;
                detailsContainer.innerHTML += reviewsHtml.outerHTML;
                detailsContainer.setAttribute('data-movie-id', movieId);
            }
        });

		// Task 3 - Add event listener for delete button (delete movie button or delete review button)
	}

	function loadGenres(genres) {
		var genresUl = document.createElement('ul');
		genresUl.setAttribute('class', 'nav navbar-nav');
		genres.forEach(function (genre) {
			var liGenre = document.createElement('li');
			liGenre.innerHTML = genre.name;
			liGenre.setAttribute('data-id', genre._id);
			genresUl.appendChild(liGenre);
		});

		return genresUl;
	}

	function loadMovies(movies) {
		var moviesUl = document.createElement('ul');
		movies.forEach(function (movie) {
			var liMovie = document.createElement('li');
			liMovie.setAttribute('data-id', movie._id);

			liMovie.innerHTML = '<h3>' + movie.title + '</h3>';
			liMovie.innerHTML += '<div>Country: ' + movie.country + '</div>';
			liMovie.innerHTML += '<div>Time: ' + movie.length + '</div>';
			liMovie.innerHTML += '<div>Rating: ' + movie.rating + '</div>';
			liMovie.innerHTML += '<div>Actors: ' + movie._actors.length + '</div>';
			liMovie.innerHTML += '<div>Reviews: ' + movie._reviews.length + '</div>';
			
			moviesUl.appendChild(liMovie);
		});

		return moviesUl;
	}

    function loadActors(actors) {
        var actorsUI = document.createElement('div');
        var actorsTitle = document.createElement('h2');
        actorsTitle.innerHTML = 'Actors';
        var actorsInfo = document.createElement('ul');
        actors.forEach(function (actor) {
            var liActor = document.createElement('li');
            liActor.setAttribute('actor-id', actor._id);

            liActor.innerHTML = '<h4>' + actor.name + '</h4>';
            liActor.innerHTML += '<div>Bio: ' + actor.bio +'</div>';
            liActor.innerHTML += '<div>Born: ' + actor.born +'</div>';

            actorsInfo.appendChild(liActor);
        });

        actorsUI.appendChild(actorsTitle);
        actorsUI.appendChild(actorsInfo);

        return actorsUI;
    }

    function loadReviews(reviews) {
        var reviewUI = document.createElement('div');
        var reviewTitle = document.createElement('h2');
        reviewTitle.innerHTML = 'Reviews';
        var reviewInfo = document.createElement('ul');
        reviews.forEach(function(review) {
            var liReview = document.createElement('li');
            liReview.setAttribute('review-id', review._id);

            liReview.innerHTML = '<h4>' + review.author + '</h4>';
            liReview.innerHTML += '<div>Bio: ' + review.content +'</div>';
            liReview.innerHTML += '<div>Born: ' + review.date +'</div>';
            reviewInfo.appendChild(liReview);
        });

        reviewUI.appendChild(reviewTitle);
        reviewUI.appendChild(reviewInfo);

        return reviewUI;
    }

	scope.loadHtml = loadHtml;
}(imdb));