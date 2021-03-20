const fs = require('fs')

const traitsJson = fs.readFileSync('assets/set4/data/traits.json')

const getTraits = () => {
   return JSON.parse(traitsJson)
}

exports.getRandomTrait = () => {
   let traits = getTraits()
   const roll = Math.floor(Math.random() * traits.length)
   return traits[roll]
}
