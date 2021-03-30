'using strict'

const path = require('path')
const express = require('express')
const mainRouter = express.Router()

// Routes
// Defines a route for the GET request to the path '/'
mainRouter.get('/', function (req, res) {
  res.send('Hello World, I\'m Node.js')
})

mainRouter.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

module.exports = mainRouter
