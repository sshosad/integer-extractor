const express = require('express')
const router = express.Router()

const extractorController = require('../controller/extractor-controller')

// Add all export api routes here
router.post('/add', extractorController.extractIntegerAndAdd)

module.exports = router