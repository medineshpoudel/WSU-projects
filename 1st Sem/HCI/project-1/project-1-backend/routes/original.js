const express = require('express')
const {addOriginalColor, getOriginalColors , deleteOriginalColor} = require('../controllers/originalColorsController')
const router  = express.Router()

router.get('/', getOriginalColors)
router.post('/', addOriginalColor)
router.delete('/', deleteOriginalColor);

module.exports = router;