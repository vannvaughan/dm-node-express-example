const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

// app declaration
const app = express();

// middleware
app.use(bodyParser.json());
app.use(logger((token, req, res) => {
    console.log('BODY: ', req.body);
    console.log('QUERY: ', req.query);
    console.log('PARAMS: ',  req.params);
}));

// controllers
const winnersCtrl = require('./controllers/winnersCtrl');
const losersCtrl = require('./controllers/losersCtrl');

// endpoints
app.get('/api/teams', isAuthed, winnersCtrl.getTeams);
app.get('/api/team/:id', winnersCtrl.getOneTeam);
app.get('/api/getLosers', isAuthed, losersCtrl.getLosers);
app.get('/api/getAllTeams', winnersCtrl.getAllTeams);


app.post('/api/teams', winnersCtrl.addTeam);

app.put('/api/team', winnersCtrl.deleteTeam);

app.delete('/api/team/:id', winnersCtrl.deleteTeam);

function isAuthed(req, res, next) {
    if (true) {
        res.status(403).json('NOT AUTHORIZED');
        return;
    } else if (false) {
        console.log('He good');
        next();
    }
}

// listen function
app.listen(3000, function() {
    console.log('Listening on port 3000');
});


