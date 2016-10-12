/**
 * Created by roije on 16/09/2016.
 */
var movies = require("./favMovieObjectFactory");

var bobMovies = movies();
bobMovies.favMovie = "The Notebook";
console.log("Bob's fav movie is: " + bobMovies.favMovie);