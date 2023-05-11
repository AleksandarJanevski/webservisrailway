const filmovi = require('../model/netLiksModel');

exports.getFilmovi = async (req, res) => {
    const all = await filmovi.find();
    res.status(200).json({ status: 'Success', data: { info: all } })
}
exports.postFilm = async (req, res) => {
    const film = await filmovi.create(req.body)
    res.status(201).json({ status: 'Success', data: { info: film } })
}
exports.patchFilm = async (req, res) => {
    const update = await filmovi.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({ status: 'Success', data: { info: update } })
}
//replace delete
exports.replaceFilm = async (req, res) => {
    try {
        const replacement = await filmovi.findOneAndReplace({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true,
        })
        res.status(200).json({
            status: "success",
            data: {
                replacement,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
}