
function emplaceVenue (state, payload, blockInfo, context) {
  const venue = {

  }
  context.socket.emit('emplacevenue', venue)
}

module.exports = emplaceVenue
