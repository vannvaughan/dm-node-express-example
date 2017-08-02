const { winners, losers } = require('../models');

module.exports = {
    getTeams: function(req, res, next) {
        if (req.query.name) {
            const filtered = winners.filter(function(val) {
                return val.team.toLowerCase() === req.query.name.toLowerCase();
            });
            res.json(filtered);
            return;
        }
        res.status(200).json(winners);
    },
    // standard es5 method
    getOneTeam: function(req, res, next) {
        const team = winners[req.params.id];
        res.json(team);
    },
    //es6 method shorthand
    addTeam(req, res, next) {
        if (req.body.team && req.body.size) {
            winners.push(req.body);
            res.status(200).json(winners);
        } else {
            res.status(304).json({ message: 'Malformed Request, Check Object Structure'});
        }
    },
    deleteTeam: function(req, res, next) {
        if (winners.length) {
            const loser = winners.pop();
            res.status(200).json(loser);
        } else {
            res.status(200).json({message: 'No More Winners'});
        }
    },
    updateTeam: function(req, res, next) {
        winners[winners.length - 1].size = 34;
        res.status(200).json(winners);
    },
    getAllTeams: function(req, res, next) {
        const teams = [winners, losers];
        res.json(teams);
    }
};












/******  Methods for exporting functions********/

// NUMBER 1

// const getTeams = function(req, res, next) {

// }

// module.exports = {
//     getTeams: getTeams
// }


// NUMBER 2

// module.exports = {
//     getTeams: function(req, res, next) {

//     }
// }

// NUMBER 3

// module.exports = function getTeams(req, res, next) {

// }
