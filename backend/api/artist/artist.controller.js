const Artist = require('./artist.model')

/**
 * Get list of all posts confirmed by the blockchain\
 */
const everything = async (req, res) => {
  try {
    const artists = await Artist.find({}).exec()
    res.send(artists)
  } catch (err) {
    console.error(err)
  }
}

module.exports = { everything }
