require('dotenv').config()
const app = require('express')()
const cors = require('cors')
const demux = require('./demux')
const io = require('./utils/io')
const venueRoutes = require('./api/venue/venue.route')

app.use(cors())

app.use('/venues', venueRoutes)

const server = app.listen(process.env.PORT, () => console.info(`Example app listening on port ${process.env.PORT}!`))

io.connect(server)

demux.watch()
