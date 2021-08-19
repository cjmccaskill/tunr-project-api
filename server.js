require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require("cors")
const app = express()
const { PORT } = process.env || 3000
const songsRouter = require('./controllers/tunr')

app.use(cors())
app.use(logger('dev'));
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        status:200,
        msg: 'you have hit the default route...nothing to see here'
    })
})

app.use('/songs', songsRouter)

app.listen(PORT, () => {
    console.log(`listening in on port: ${PORT}`)
})