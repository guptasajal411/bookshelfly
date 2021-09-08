const md5 = require('md5');
const User = require("../models/userModel.js");

exports.getWelcome = function(req, res) {
    res.render("welcome");
}

exports.getLogin = function(req, res) {
    res.render("login");
}

exports.postLogin = function(req, res) {
    const username = req.body.username;
    const password = md5(req.body.password);

    User.findOne({ username: username}, function(err, foundUser) {
        if (err) {
            console.log(err);
        } else {
            if (foundUser) {
                if (foundUser.password === password) {
                    res.render("library");
                } else {
                    res.send("Wrong password. Try again");
                }
            } else {
                res.send("User not found.");
            }
        }
    });
}

exports.getRegister = function(req, res) {
    res.render("register");
}

exports.postRegister = function(req, res) {
    const newUser = new User({
        username: req.body.username,
        password: md5(req.body.password)
    });
    newUser.save();
    res.redirect("/");
}