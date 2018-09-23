const express = require('express')
const artistController = require('./artist.controller')

const router = express.Router()

router.route('/').get(artistController.everything)

module.exports = router
