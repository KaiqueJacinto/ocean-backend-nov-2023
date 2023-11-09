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

app.get('/herois/:id', function (req,res){
  if (req.params.id > herois.length-1){
    res.send("Not Found")
  }
  else{
    res.send(herois[req.params.id])
  }
})

app.listen(3000)