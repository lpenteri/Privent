const emplaceArt = require('./emplaceArt')

const account = process.env.EOSIO_CONTRACT_ACCOUNT

module.exports = [
  {
    actionType: `${account}::emplaceart`, // account::action name
    updater: emplaceArt
  }
]
