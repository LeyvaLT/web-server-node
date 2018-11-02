
const express = require('express')
const app = express()
const hbs = require('hbs')

app.use(express.static(__dirname + '/public'))
// Express hbs engine
require('./hbs/helpers')
hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs')


app.get('/', function(req, res) {
  res.render('home', {
    nombre: 'Edgar Leyva'
  })
})

app.get('/about', function(req, res) {
  res.render('about')
})

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto: 3000')
})