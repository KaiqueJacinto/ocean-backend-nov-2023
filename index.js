const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/oi', function (req, res) {
  console.log(req)
  res.send('Olá, tudo bem!')
})

app.listen(3000)