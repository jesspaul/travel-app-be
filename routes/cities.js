const express = require('express');
const router = express.Router();
const citiesCtrl = require('../controllers/cities');

router.get('/', citiesCtrl.index);
router.post('/', citiesCtrl.create);
router.delete('/:id', citiesCtrl.delete);
router.put('/:id', citiesCtrl.update);

module.exports = router;