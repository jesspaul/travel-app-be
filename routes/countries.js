const express = require('express');
const router = express.Router();
const countriesCtrl = require('../controllers/countries');

router.get('/', countriesCtrl.index);
router.post('/', countriesCtrl.create);
router.delete('/:id', countriesCtrl.delete);
router.put('/:id', countriesCtrl.update);

module.exports = router;