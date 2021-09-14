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
                        res.render("library", {
                            user: foundUser,
                            books: foundBooks.reverse()
                        });
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
            foundUser.issuedBooks.forEach(async function(object){
                // console.log(object.bookName + " :: " + req.body.bookName);
                if (object.bookName === req.body.bookName){
                    hasBook = true;
                }
            });
            if (!hasBook) {
                // adding selected book to the user collection
                foundUser.issuedBooks.push({
                    bookName: req.body.bookName
                });
                await foundUser.save();
                // user issues the new book
                // updating available and issued books in library collection
                Library.findOne({ bookName: req.body.bookName }, async function (error, libraryBook){
                    if (error) {
                        res.send(err);
                    } else {
                        // console.log(libraryBook);
                        libraryBook.available = libraryBook.available - 1;
                        libraryBook.issued = libraryBook.issued + 1;
                        await libraryBook.save();
                        res.redirect("/library/" + req.params.userID);
                    }
                });
            } else {
                // user already issued the book
                res.redirect("/library/" + req.params.userID);
            }
        }
    });
}