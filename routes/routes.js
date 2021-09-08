const express = require('express');
const app = express();
// const ejs = require('ejs');

const authenticationController = require("../controllers/authenticationController");
const libraryController = require("../controllers/libraryController");

// app.set('view engine', 'ejs');

app
    .route("/")
    .get(authenticationController.getWelcome);

app
    .route("/register")
    .get(authenticationController.getRegister);

app
    .route("/login")
    .get(authenticationController.getLogin);

app
    .route("/")
    .get(libraryController.getLibrary);
