const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 4444

var corsOptions = {
  origin: `http://localhost:${PORT}`
}

app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

require('./src/models')

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to led application.' })
})

require('./src/routers')(app)

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})