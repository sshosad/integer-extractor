const express = require('express')

const router = express.Router()

// import all route here
const extractorRoute = require('./extractor-route')

router.use('/extract', extractorRoute)

module.exports = router