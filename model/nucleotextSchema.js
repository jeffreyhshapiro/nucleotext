var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var nucleotextSchema = new Schema ({
  type: String,
  nucleotext: String,
  baseString: String,
  nucleotideSequence: String
})

var nucleotext = mongoose.model('nucleotext', nucleotextSchema)
