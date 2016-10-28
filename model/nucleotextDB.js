var nucleotextSchema = require('./nucleotextSchema.js')
var express = require('express');
var bp = require('body-parser');
var app = express();
app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

module.exports = {
  nucleotextsPost: function(req, res) {
    var nucleotextDB = new nucleotextSchema({
      type: req.body.type,
      nucleotext: req.body.nucleotext,
      baseString: req.body.binaryString || req.body.baseFourString,
      nucleotideSequence: req.body.nucleotideString
  })
    nucleotextDB.save(function(err, nucleotext) {
      if (err || !nucleotext) {
        throw err
      } else if (nucleotext) {
        res.json(nucleotext)
      }
    })
  }
}
