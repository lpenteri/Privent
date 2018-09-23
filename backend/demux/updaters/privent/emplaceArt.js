const mongoose = require('mongoose')

async function emplaceArt (state, payload, blockInfo, context) {
  const Artist = state.artist
  try {
    artist = new Artist(
      {
        _id: new mongoose.Types.ObjectId(),
        account: payload.data.account,
        name: payload.data.name,
        type: payload.data.type,
        location: payload.data.location,
        bio: payload.data.bio,
        capacity: payload.data.capacity,
        imageName: payload.data.imageName,
        flat_fee:payload.data.flat_fee,
        hourly_fee:payload.data.hourly_fee
      }
    )
    await artist.save()
  } catch (err) {
    console.error(err)
  }
}

module.exports = emplaceArt
