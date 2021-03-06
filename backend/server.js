require('dotenv').config()
const app = require('express')()
const cors = require('cors')
const demux = require('./demux')
const io = require('./utils/io')
const artistRoutes = require('./api/artist/artist.route')

app.use(cors())

app.use('/searchArtists', artistRoutes)

const server = app.listen(process.env.PORT, () => console.info(`Example app listening on port ${process.env.PORT}!`))

io.connect(server)

demux.watch()
