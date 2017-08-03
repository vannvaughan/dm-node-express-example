const express = require('express');
const router = express.Router();

const winnersCtrl = require('../controllers/winnersCtrl');

function sayHi(req, res, next) {
    console.log('Hello');
    next();
}

router.get('/', sayHi, winnersCtrl.getTeams);
router.get('/:id', winnersCtrl.getOneTeam);

router.post('/', winnersCtrl.addTeam);

router.put('/:id', winnersCtrl.updateTeam);

router.delete('/:id', winnersCtrl.deleteTeam);

module.exports = router;

