const Library = require("../models/libraryModel.js");

exports.getLibrary = function(req, res) {
    res.render("library");
    Library.find({}, function(err, library) {
        console.log(library);
    });
}