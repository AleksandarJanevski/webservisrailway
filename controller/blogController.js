const Blog = require('./../model/blogModel.js');

exports.createBlog = async (req, res) => {

    // const newBlog = new Blog(req.body)
    // await newBlog.save()
    try {

        console.log(req.body);
        const newBlog = await Blog.create(req.body)
        res.status(201).json(
            { status: 'success', data: { blog: newBlog } }
        )
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err, })
    }

}
exports.getAllBlog = async (req, res) => {
    try {
        let queryObj = { ...req.query };
        const exludeFields = ["page", "sort",];

        excludeFields.forEach(element => delete queryObj[element]);
        // const blogs = await Blog.find(queryObj);
        // const query = Blog.find(queryObj);
        // const blogs = await query

        let string = JSON.stringify(queryObj)
        const query = Blog.find(JSON.parse(string))
        const blogs = await query

        string = string.replace(/\b(gte\gt\lte\lt)\b/g, (match) => `$${match}`);


        res.status(201).json(
            { status: 'success', data: { blog: blogs } }
        )
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err, })
    }
}
exports.getBlog = async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    // Blog.findOne({ _id: req.params.id });

    //naslov
    // const nasolv = req.params.naslov

}
exports.updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
        res.status(200).json({
            status: 'success', data: { blog: blog }
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}
exports.deleteBlog = async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: 'success',
            data: null,
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}