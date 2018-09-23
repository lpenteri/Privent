const Venue = require('./venue.model')

/**
 * Get list of all posts confirmed by the blockchain\
 */
const everything = async (req, res) => {
  try {
    const venues = await Venue.find({}).exec()
    res.send(venues)
  } catch (err) {
    console.error(err)
  }
}

module.exports = { everything }
