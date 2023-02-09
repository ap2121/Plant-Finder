const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Plant = new Schema({
    commonName: {type: String, required: true},
    scientificName: {type: String, required: true},
    img: {type: String, required: true},
    sunExposure: {type: String, required: true},
    matureSize: {type: String, required: true},
    soilType: {type: String, required: true},
    soilPHAvg: {type: Number, required: true},
    hardinessZone: {type: Number, required: true},
    water: {type: String, required: true},
    nativeRegion: {type: Schema.Types.ObjectId, ref: 'Region'}
   


})

module.exports = mongoose.model("Plant", Plant)