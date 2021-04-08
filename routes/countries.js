const express = require('express');
const router = express.Router();
const countriesCtrl = require('../controllers/countries');

router.get('/', countriesCtrl.index);
router.post('/', countriesCtrl.create);

module.exports = router;