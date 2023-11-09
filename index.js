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

// read all
app.get('/herois', function (req,res){
  res.send(herois.filter(Boolean))
})

// read id
app.get('/herois/:id', function (req,res){
  if (req.params.id > herois.length-1){
    res.send("Not Found")
  }
  else{
    res.send(herois[req.params.id])
  }
})

// create
app.post('/herois', function (req,res) {
  const heroi = req.body.heroi
  if (herois.includes(heroi)){
    res.send("Item já está na lista! (NÃO FOI INSERIDO)")
  }else{
    herois.push(heroi)
    res.send("Heroi inserido na lista: "+heroi)
  }
  
})

// Update
app.put("/herois/:id", function (req,res) {
  herois[req.params.id] = req.body.heroi
  res.send("Alterado com sucesso!")
})

// delete

app.delete('/herois/:id', function(req,res){
  delete herois[req.params.id]
  res.send('Item deletado com sucesso')
})

app.listen(3000)