const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const PORT = process.env.PORT || 3000;
require('dotenv').config();

app.use('/', require(path.join(__dirname, './routes/routes.js')));
app.set('view engine', 'ejs');

app.listen(PORT, function(){
    console.log('listening on port: ' + PORT);
})