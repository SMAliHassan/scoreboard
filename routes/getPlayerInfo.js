const express = require('express');
const router = express.Router()

const controller = require('../controllers/adminController.js')

router.get('/', controller.get)

module.exports = router