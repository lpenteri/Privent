const emplaceVenue = require('./emplaceVenue')

const account = process.env.EOSIO_CONTRACT_ACCOUNT

module.exports = [
  {
    actionType: `${account}::emplacevenue`, // account::action name
    updater: emplaceVenue
  }
]
