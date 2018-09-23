const express = require('express')
const venueController = require('./venue.controller')

const router = express.Router()

router.route('/').get(venueController.everything)

module.exports = router
