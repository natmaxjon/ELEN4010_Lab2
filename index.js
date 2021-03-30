'using strict'

const path = require('path')
const express = require('express')
const app = express()

// Routes

// Defines a route for the GET request to the path '/'
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

app.listen(3000)
console.log('Express server running on port 3000')
