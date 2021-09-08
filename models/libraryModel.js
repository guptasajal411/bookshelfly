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

module.exports = Library;