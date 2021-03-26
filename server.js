const express = require('express')
const hbs = require('express-handlebars')
const fs = require('fs')
const bodyParser = require("body-parser");
// const puppyRoutes = require('./users')
// const newUploadroutes = require('./addDetails')

const server = express()

// Middlewares
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars 
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')


//This is rendering our login.hbs
server.get('/', (req,res) => {
  fs.readFile('./data.json', 'utf-8', (err, data) => {
    if (err) return res.status(500)
    const parsedData = JSON.parse(data)
    res.render('login', parsedData)
    
    
  })
  
})

//Routes 


// server.use('/features')
// server.use('/')




module.exports = server