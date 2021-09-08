exports.getWelcome = function(req, res) {
    res.send("welcome");
}

exports.getLogin = function(req, res) {
    res.render("login");
}

exports.getRegister = function(req, res) {
    res.render("register");
}