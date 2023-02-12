const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Gloss = new Schema({
    term: {type: String, required: true},
    def: {type: String, required: true}
})

module.exports = mongoose.model('Gloss', Gloss)

