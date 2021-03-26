const fs = require('fs')
const express = require('express')
const hbs = require('express-handlebars')
const dogRoutes = require('./routes')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

server.use('/puppies', dogRoutes)


// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

// Your routes/router(s) should go here

server.get('/', (req, res) => {

    fs.readFile('./data.json', 'utf-8', (err, data) => {
        res.render('./home', JSON.parse(data))
    })
    //res.send("Contactbook")
})




module.exports = server