(function (imdb) {
	var genres,
        movies;

	imdb.generateData();
	genres = imdb.getGenres();

	imdb.loadHtml('#genres', genres);

	// For testing
	console.log(genres);
}(imdb));