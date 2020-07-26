const express = require('express')
const cors = require("cors");
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

// Setup default port
const PORT = process.env.PORT || 4000
// Create express app
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.json())

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.get('/status', (req, res) => {
  res.status(200).send("ok")
})

// Start express app
app.listen(PORT, function() {
  console.log(`Server is running on: ${PORT}`)
})