const express = require('express');
const mongoose = require('mongoose');
const blogController = require('./controller/blogController.js');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


mongoose.connect('mongodb+srv://AleksandarJanevski:Mazacar101711.@cluster0.obnv7xx.mongodb.net/vezba1?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Uspesno Povrzuvanje');
}).catch((err) => {
    console.log(err);
});

// const testBlog = new Blog({
//     naslov: 'Iphone 12',
//     tekst: 'Iphone is 3 years old',
//     ocenka: 4,
//     avtor: 'Riste',
//     cena: 300
// });

// async function saveBlog() {
//     try {
//         await testBlog.save()
//         console.log('Blog saved successfully');
//     } catch (err) {
//         console.log(err);
//     }
// }

// saveBlog();

app.get("/api/v1/blogs", blogController.getAllBlog);
app.get("/api/v1/blogs:id", blogController.getBlog);
app.post("/api/v1/blogs", blogController.createBlog);
app.patch("/api/v1/blogs:id", blogController.updateBlog);
app.delete("/api/v1/blogs:id", blogController.deleteBlog);

const port = 8000;
app.listen(port, err => {
    if (err) console.log(err);
    console.log('started ' + port);
});