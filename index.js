const express = require('express');
const ejs = require('ejs');
const app = express();
const path = require('path');

app.set("view engine", "ejs");
app.use(express.json());

app.use("/", require(path.join(__dirname, "./routes/routes.js")));
app.use(express.static("public"));

module.exports = app;