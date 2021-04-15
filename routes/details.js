const express = require('express');
const router = express.Router();
const detailsCtrl = require('../controllers/details');

router.get('/', detailsCtrl.index);
router.post('/', detailsCtrl.create);
// router.delete('/:id', detailsCtrl.delete);
// router.put('/:id', detailsCtrl.update);

module.exports = router;