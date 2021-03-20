const functions = require('firebase-functions')
const path = require('path')
const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()
app.use(express.json())
app.use(cors())
app.use(logger('dev'))
app.use('/images', express.static('./assets/set4/images'))

const tft = require('./lib/tft')

app.use('/traits/randomize', (request, response) => {
   const trait = tft.getRandomTrait()
   let imageName = trait.name.toLowerCase()
   imageName = imageName.replace(/ /g, '')
   response.status(200).send({
      ...trait,
      icon: `/images/traits/${imageName}.svg`,
   })
})

app.use(function (request, response) {
   response.status(404).send()
})

exports.api = functions.https.onRequest(app)
