
function emplaceArt (state, payload, blockInfo, context) {
  const artist = {

  }
  context.socket.emit('emplaceart', artist)
}

module.exports = emplaceArt
