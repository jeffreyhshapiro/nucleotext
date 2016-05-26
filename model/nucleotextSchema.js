var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nucleotextSchema = new Schema ({
  type: String,
  nucleotext: String,
  baseString: String,
  nucleotideSequence: String
})

module.exports = mongoose.model('nucleotext', nucleotextSchema)
