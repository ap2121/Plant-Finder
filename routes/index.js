const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')
router.get('/', (req, res) => res.send('This is root!'))


//plant routes
router.post('/plants', controllers.createPlant)
router.get('/plants', controllers.getPlants)
router.get('/plants/:id', controllers.getPlantById)
router.put('/plants/:id', controllers.updatePlant)
router.delete('/plants/:id', controllers.deletePlant)
router.get('/plants/region/:id', controllers.getPlantByRegion)
//
//region routes
router.get('/regions', controllers.getRegions)
//
router.get('/gloss', controllers.getGlossary)

module.exports = router;