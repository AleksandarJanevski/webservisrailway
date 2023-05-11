const mongoose = require('mongoose');

const sliki = new mongoose.Schema({
    img: {
        type: Image
    }
});

const foto = mongoose.model('sliki', sliki);

module.exports = foto;