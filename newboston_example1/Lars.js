/**
 * Created by roije on 16/09/2016.
 */
var movies = require('./favMovieObjectFactory');

var larsMovies = movies();
larsMovies.favMovie = "The Hobbit";
console.log("Lars fav movies is : " + larsMovies.favMovie);