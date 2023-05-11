const mongoose = require('mongoose');

const blogShema = new mongoose.Schema({
    naslov: {
        type: String,
        required: [true, 'Mora da ima naslov'], //da ne i err
    },
    tekst: {
        type: String,
        required: [true, 'Mora da ima tekst']
    },
    ocenka: {
        type: Number,
        default: 3,
    },
    avtor: {
        type: String,
    },
    cena: {
        type: Number
    },
    vreme: {
        type: Date,
        default: Date.now,
    }

});

const Blog = mongoose.model('Blog', blogShema);

module.exports = Blog;