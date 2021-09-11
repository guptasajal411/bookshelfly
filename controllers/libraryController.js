const Library = require("../models/libraryModel.js");

exports.getLibrary = function(req, res) {
    // const objectID = req.params.objectID;
    res.send(req.params);
}