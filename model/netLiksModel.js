const mongoose = require('mongoose');

const filmovi = new mongoose.Schema({
    title: {
        type: String
    },
    year: {
        type: String
    },
    released: {
        type: String,
    },
    genre: {
        type: String
    },
    director: {
        type: String
    },
    plot: {
        type: String
    },
    metascore: {
        type: String,
    },
    imdbRating: {
        type: String
    },
})

const movies = mongoose.model('movies', filmovi)

module.exports = movies;