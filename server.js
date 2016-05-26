var express = require('express');
var app = express();
var mongoose = require('mongoose');
var nucleotextSchema = require('./model/nucleotextSchema.js');
var bp = require('body-parser');
var PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/nucleotext'); //create a new database

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

app.use(express.static('view/css'))
app.use(express.static('view/html'))
app.use(express.static('view/js'))

app.get('/', function(req, res) {
  res.sendFile(index.html)
})

app.post('/nucleotexts', function(req, res) {
  console.log(req.body)
  var nucleotextDB = new nucleotextSchema({
    type: req.body.type,
    nucleotext: req.body.nucleotext,
    baseString: req.body.binaryString || req.body.baseFourString,
    nucleotideSequence: req.body.nucleotideString
  })
  nucleotextDB.save(function(err, nucleotext) {
    if (err || !nucleotext) {
      console.log(err)
    } else if (nucleotext) {
      console.log(nucleotext)
      res.json(nucleotext)
    }
  })
})

app.listen(PORT, function(){
  console.log('listening on '+ PORT)
})
