const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: { type: String, unique: true },
    password: { type: String },
    email: { type: String, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    imgPath: { type: String },
    githubId: {
      type: String
    },
    projects: [
      {
        type: [Schema.Types.ObjectId],
        ref: 'Project',
      },
    ],
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
)

const User = mongoose.model('User', userSchema)
module.exports = User
