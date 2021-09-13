const Library = require("../models/libraryModel.js");
const User = require("../models/userModel.js");

exports.getLibrary = function(req, res) {
    User.findOne({_id: req.params.userID}, function(err, foundUser) {
        if (err) {
            res.render("login", { dangerMessage: `Please login before accessing the library` });
        } else {
            res.send("welcome to the library, your credentials are: " + foundUser);
        }
    });
}