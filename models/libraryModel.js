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

const Library = new mongoose.model("Library", librarySchema);

// create new book in the library
// const newBook = new Library({
//     bookName: "Diary of a Wimpy Kid: The Long Haul",
//     issued: 160,
//     available: 40,
//     total: 200,
//     cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Diary_of_a_Wimpy_Kid_The_Long_Haul_book_cover.jpg/220px-Diary_of_a_Wimpy_Kid_The_Long_Haul_book_cover.jpg",
//     rating: 5
// });
// newBook.save();
// console.log("newbook saved");

module.exports = Library;