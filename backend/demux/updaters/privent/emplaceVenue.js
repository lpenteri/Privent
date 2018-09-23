const mongoose = require('mongoose')

async function emplaceVenue (state, payload, blockInfo, context) {
  const Venue = state.venue
  try {
    venue = new Venue(
      {
        _id: new mongoose.Types.ObjectId(),
        account: payload.data.account,
        name: payload.data.name,
        type: payload.data.type,
        location: payload.data.location,
        bio: payload.data.bio,
        capacity: payload.data.capacity,
        imageName: payload.data.imageName
      }
    )
    await venue.save()
  } catch (err) {
    console.error(err)
  }
}

module.exports = emplaceVenue
