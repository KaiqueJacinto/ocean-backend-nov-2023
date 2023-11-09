const express = require('express')
const app = express()

const herois = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"]

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/oi', function (req, res) {
  res.send('Olá, tudo bem!')
})

app.get('/herois', function (req,res){
  res.send(herois)
})


app.listen(3000)