const User = require("../models/userModel.js")

exports.getWelcome = function(req, res) {
    res.render("welcome");
}

exports.getLogin = function(req, res) {
    res.render("login");
}

exports.getRegister = function(req, res) {
    res.render("register");
}