const express = require('express')
const router = express.Router()

const customerController = require('../app/controllers/CustomerController.js')

router.get('/', customerController.index)
router.get('/getall', customerController.getAll)
router.get('/search/:query', customerController.search)
router.post('/create', customerController.create)
router.put('/edit/:id', customerController.edit)
router.delete('/delete/:id', customerController.delete)

module.exports = router