const mongoose = require('mongoose')

const { Schema } = mongoose

let Artist = null

try {
  const ArtistSchema = new Schema({
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
    imageName: String,
    flat_fee:Number,
    hourly_fee:Number
  })
  Artist = mongoose.model('Artist', ArtistSchema)
} catch (e) {
  Artist = mongoose.model('Artist')
}

module.exports = Artist
