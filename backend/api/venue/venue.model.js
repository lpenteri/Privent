const mongoose = require('mongoose')

const { Schema } = mongoose

let Venue = null

try {
  const VenueSchema = new Schema({
    _id: Schema.Types.ObjectId,
    account:{
      type: String,
      unique: true
    },
    name: String,
    type: String,
    capacity: Number,
    location: String,
    bio: String,
    imageName: String
  })
  Venue = mongoose.model('Venue', VenueSchema)
} catch (e) {
  Venue = mongoose.model('Venue')
}

module.exports = Venue
