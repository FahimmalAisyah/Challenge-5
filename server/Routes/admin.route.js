const express = require('express')
const router = express.Router()
const adminController = require('../Controllers/adminController')


router.get('/', adminController.homepage)

router.get('/add', adminController.addMobil)

router.post('/add', adminController.postMobil)




module.exports = router