const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Region = new Schema({
    name: {type: String, required: true},
    
})

module.exports = mongoose.model("Region", Region) 