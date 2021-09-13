const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb+srv://" + process.env.usernameMongoDB + ":" + process.env.password + "@cluster0.xgjts.mongodb.net/bookshelflyDB");

const librarySchema = new mongoose.Schema({
    bookName: String,
    issued: Number,
    available: Number,
    total: Number,
    cover: String,
    rating: Number
});

// create new book in the library
// const newBook = new Library({
//     bookName: "The Lord of the Rings",
//     issued: 20,
//     available: 30,
//     total: 50,
//     cover: "https://images-na.ssl-images-amazon.com/images/I/51EstVXM1UL.jpg",
//     rating: 4
// });
// newBook.save();

const Library = new mongoose.model("Library", librarySchema);

module.exports = Library;