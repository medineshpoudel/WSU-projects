const express = require('express')
const {addTestColor, getTestColors} = require('../controllers/testColorsController')

const router  = express.Router()

router.get('/', getTestColors)
router.post('/', addTestColor)

module.exports = router;