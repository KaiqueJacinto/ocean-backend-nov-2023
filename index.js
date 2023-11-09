const express = require('express')
const app = express()

// registrar um Middleware
// indica que as requisições são body em JSON

app.use(express.json())

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

app.post('/herois', function (req,res) {
  const heroi = req.body.heroi
  if (herois.includes(heroi)){
    res.send("Item já está na lista! (NÃO FOI INSERIDO)")
  }else{
    herois.push(heroi)
    res.send("Heroi inserido na lista: "+heroi)
  }
  
})

app.listen(3000)