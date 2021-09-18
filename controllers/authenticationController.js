const md5 = require('md5');
const User = require("../models/userModel.js");

// GET
// landing page for bookshelfly
exports.getWelcome = function (req, res) {
    res.render("welcome");
}

// GET
// login page
exports.getLogin = function (req, res) {
    res.render("login", { dangerMessage: "true" });
}

// POST
// login authentication
exports.postLogin = function (req, res) {
    const username = req.body.username;
    const password = md5(req.body.password);

    User.findOne({ username: username }, async function (err, foundUser) {
        if (err) {
            console.log(err);
        } else {
            if (foundUser) {
                if (foundUser.password === password) {
                    foundUser.signedIn = true;
                    await foundUser.save();
                    res.redirect("/library/" + foundUser._id);
                } else {
                    res.render("login", { dangerMessage: `Wrong password. Please try again.` });
                }
            } else {
                res.render("login", { dangerMessage: `User not found. Enter a valid username.` });
            }
        }
    });
}

// GET
// registration page
exports.getRegister = function (req, res) {
    res.render("register", { dangerMessage: "true" });
}

// POST
// registration page
exports.postRegister = function (req, res) {
    User.findOne({ username: req.body.username }, async function (err, foundUser) {
        if (err) {
            res.send(err);
        } else {
            if (foundUser == null) {
                const newUser = new User({
                    username: req.body.username,
                    password: md5(req.body.password),
                    signedIn: false
                });
                newUser.save();
                res.redirect("/");
            } else {
                res.render("register", { dangerMessage: "Username already exists. Please use another username." });
            }
        }
    });
}