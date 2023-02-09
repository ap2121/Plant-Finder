const Plant = require('../models/plant')

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
        const plants = await Plant.find()
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
    getPlants
}