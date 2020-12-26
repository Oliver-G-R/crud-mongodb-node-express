const path = require('path')
const morgan = require('morgan')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

//CONECTANDO MONGODB
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('Db connected'))
    .catch(e => console.log(e))

//IMPORTANDO RUTAS
const indexRoutes = require('./routes/index')
//CONFIGURACIONES
app.set('port', process.env.PORT || 3000)
app.set('views', path.join( __dirname + '/views'))
app.set('view engine', 'ejs')


//MIDDLEWARES
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false})) //codifica los datos que manda el usuario en JSON


//RUTAS
app.use('/', indexRoutes)
app.get('*', (req, res) => {
    res.render('notFound')
})

//INICIANDO SERVIDOR
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})