const express = require('express');
const router  = express.Router();
const House = require('../controllers/houseController')

router.get('/', House.findAll)
router.post('/', House.addNewHouse)
router.get('/:id/user', House.findUserHouse)
router.get('/:id', House.findDetailHouse)
router.put('/:id', House.updateHouse)
router.delete('/:id', House.deleteHouse)

module.exports = router

