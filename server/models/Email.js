const mongoose = require('mongoose')
const Schema = mongoose.Schema

const emailSchema = new Schema(
  {
    email: { type: String},
    subject: { type: String },
    message: { type: String },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
  },
)

const Email = mongoose.model('Email', emailSchema)
module.exports = Email