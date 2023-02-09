const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')
router.get('/', (req, res) => res.send('This is root!'))


//plant routes
router.post('/plants', controllers.createPlant)




module.exports = router;