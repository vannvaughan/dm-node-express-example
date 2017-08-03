const express = require('express');
const router = express.Router();

const losersCtrl = require('../controllers/losersCtrl');

router.get('/', losersCtrl.getLosers);

module.exports = router;
