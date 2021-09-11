const md5 = require('md5');
const User = require("../models/userModel.js");

exports.getWelcome = function(req, res) {
    res.render("welcome");
}

exports.getLogin = function(req, res) {
    res.render("login", { dangerMessage: "" });
}

exports.postLogin = function(req, res) {
    const username = req.body.username;
    const password = md5(req.body.password);

    User.findOne({ username: username }, function(err, foundUser) {
        if (err) {
            console.log(err);
        } else {
            if (foundUser) {
                if (foundUser.password === password) {
                    // const object = foundUser._id;
                    // console.log("/library/" + String(object));
                    res.redirect("/library/objectoooo");
                } else {
                    res.render("login", { dangerMessage: `Wrong password. Please try again.` });
                }
            } else {
                res.render("login", { dangerMessage: `User not found. Enter a valid username.` });
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