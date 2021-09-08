const md5 = require('md5');
const User = require("../models/userModel.js");

exports.getWelcome = function(req, res) {
    res.render("welcome");
}

exports.getLogin = function(req, res) {
    res.render("login");
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