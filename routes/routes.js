const express = require('express');
const app = express();

const authenticationController = require("../controllers/authenticationController");
const libraryController = require("../controllers/libraryController");

app
    .route("/")
    .get(authenticationController.getWelcome);

app
    .route("/register")
    .get(authenticationController.getRegister)
    .post(authenticationController.postRegister);

app
    .route("/login")
    .get(authenticationController.getLogin)
    .post(authenticationController.postLogin);

app
    .route("/library/:objectID")
    .get(libraryController.getLibrary);

module.exports = app;