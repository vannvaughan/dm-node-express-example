const express = require('express');
const bodyParser = require('body-parser');

const winners = [
    {
        team: 'Saints',
        size: 50
    },
    {
        team: 'Chiefs',
        size: 38
    },
    {
        team: 'Patriots',
        size: 11
    },
    {
        team: 'Cowboys',
        size: 1
    }
];

const app = express();

app.use(bodyParser.json());


app.get('/api/teams', function(req, res, next) {
    res.status(200).json(winners);
});
app.post('/api/teams', function(req, res, next) {
    if (req.body.team && req.body.size) {
        winners.push(req.body);
        res.status(200).json(winners);
    } else {
        res.status(304).json({ message: 'Malformed Request, Check Object Structure'});
    }
});
app.delete('/api/team', function(req, res, next) {
    if (winners.length) {
        const loser = winners.pop();
        res.status(200).json(loser);
    } else {
        res.status(200).json({message: 'No More Winners'});
    }
});
app.put('/api/team', function(req, res, next) {
    winners[winners.length - 1].size = 34;
    res.status(200).json(winners);
});


app.listen(3000, function() {
    console.log('Listening on port 3000');
});


