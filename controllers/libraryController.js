const Library = require("../models/libraryModel.js");
const User = require("../models/userModel.js");

exports.getLibrary = function(req, res) {
    User.findOne({_id: req.params.userID}, function(err, foundUser) {
        if (err) {
            res.send(err);
        } else {
            if (foundUser.signedIn == false) {
                res.render("login", { dangerMessage: "Please Sign In before accessing the library."})
            } else {
                Library.find({}, function(err, foundBooks) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.render("library", { username: foundUser.username, userID: foundUser._id, books: foundBooks.reverse() });
                    }
                });
            }
        }
    });
}

exports.postSignout = function(req, res) {
    User.findOne({_id: req.params.userID}, async function(err, foundUser) {
        if (err) {
            res.send(err);
        } else {
            foundUser.signedIn = false;
            await foundUser.save();
            res.redirect("/");
        }
    });
}

exports.postIssueBook = function (req, res){
    User.findOne({_id: req.params.userID}, async function(err, foundUser) {
        if (err) {
            res.send(err);
        } else {
            var hasBook = false;
            foundUser.issuedBooks.find(function(object){
                // console.log(object.bookname + " :: " + req.body.bookName);
                if (object.bookName === req.body.bookName){
                    res.send("you already have that book under your sleeves.");
                    hasBook = true;
                }
                console.log(hasBook);
                if (!hasBook) {
                    res.send("you have issued this book under your name now");
                }
            });
        }
    });
}