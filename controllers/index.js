const Plant = require('../models/plant')
const Region = require('../models/region')
const { findByIdAndDelete } = require('../models/region')

const createPlant = async (req, res) => {
    try {
        const plant = await new Plant(req.body)
        await plant.save()
        return res.status(201).json({
            plant
        })
    } catch(error) {
        return res.status(500).json({
            error: error.message
        }) 
    }
}

const getPlants = async (req, res) => {
    try {
        const plants = await Plant.find().populate('nativeRegion')
        return res.status(200).json({
            plants
        })
    } catch(error) {
        return res.status(500).json({
            error: error.message
        })
    }
}

const getPlantById = async (req, res) => {
    try {
        const { id } = req.params
        const plant = await Plant.findById(id)
        return res.status(200).json({
            plant
        })

    } catch(error) {
        return res.status(500).json({
            error: error.message
        })
    } 
}
const updatePlant = async (req, res) => {
    try {
    const plant = await Plant.findByIdAndUpdate(req.params.id, req.body, {new: true})
     res.status(200).json(plant) 
    } catch(error) {
        return res.status(500).json({
            error: error.message
        })
    } 
}

const deletePlant = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Plant.findByIdAndDelete(id)
        if(deleted) {
            return res.status(200).send('Plant deleted')
        } 
        throw new Error("Plant not found")
    } catch(error) {
        return res.status(500).send(error.message)
    }
}

const getRegions = async (req, res) => {
    try {
        const regions = await Region.find()
        res.status(200).json({
            regions
        })
    } catch(error) {
        return res.status(500).json({
            error:error.message
        })
            
        }
    }

const getPlantByRegion = async (req,res) => {
    try {
    const { id } = req.params
    const plants = await Plant.find({nativeRegion: id })
    return res.status(200).json({
        plants
    })
} catch(error) {
    return res.status(500).json({
        error: error.message
    })
}
}
module.exports = {
    createPlant,
    getPlants,
    getPlantById,
    updatePlant,
    deletePlant,
    getPlantByRegion,
    getRegions
}