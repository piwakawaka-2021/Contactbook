const express = require('express')
const hbs = require('express-handlebars')
const fs = require('fs')
const router = express.Router()

router.get('/user/:id', (req,res) => {
  const id = Number(req.params.id)
  fs.readFile('./data.json', 'utf-8', (err, data) => {
   if (err) return res.status(500)
   const parsedData = JSON.parse(data)
   const one = parsedData.puppies.find(people => people.id === id)
   res.render('user', one)

 })
 
})

module.exports = router