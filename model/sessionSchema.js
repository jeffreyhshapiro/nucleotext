var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sessionSchema = new Schema ({
  sid: String,
  nucleotextInfo : [
    {
      type: Schema.Types.ObjectId,
      ref: 'nucleotextSchema'
    }
  ]

})

module.exports = mongoose.model('session', sessionSchema)
