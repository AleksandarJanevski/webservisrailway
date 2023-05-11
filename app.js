const express = require('express');
const morgan = require('morgan')
const databaza = require('./database/database')
const netliks = require('./controller/netLiksController')

const app = express();

const log = (req, res, next) => {
    console.log('Request: ' + req.method, 'URL: ' + req.url);
    next()
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(log)
app.use(morgan("dev"));
databaza.konekcija();

app.get('/api/v1/netliks', netliks.getFilmovi);
app.put('/api/v1/netliks:id', netliks.replaceFilm);

app.listen(process.env.PORT, err => {
    if (err) console.log(err);
    console.log('Port Online');
})