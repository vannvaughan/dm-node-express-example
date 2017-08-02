// Object destruction of losers
const { losers } = require('../models');

module.exports = {
    getLosers(req, res, next) {
        res.json(losers);
    }
}
