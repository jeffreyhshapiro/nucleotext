var express = require('express');
var app = express();
var mongoose = require('mongoose');
var nucleotextDB = require('./model/nucleotextDB.js')
var bp = require('body-parser');
var session = require('express-session');
var dotenv = require('dotenv').config();
var PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DB_PATH); //create a new database

app.use(
  session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true,
    maxAge: 60000
  }
})
)

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

app.use(express.static('view/css'))
app.use(express.static('view/html'))
app.use(express.static('view/js'))

app.get('/', function(req, res) {
  res.sendFile(index.html)
})

app.post('/nucleotexts', nucleotextDB.nucleotextsPost)

app.listen(PORT, function(){
  console.log('listening on '+ PORT)
})

// type: req.body.type,
// nucleotext: req.body.nucleotext,
// baseString: req.body.binaryString || req.body.baseFourString,
// nucleotideSequence: req.body.nucleotideString
