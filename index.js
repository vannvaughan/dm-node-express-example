const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const config = require('./config');

const winnerRoutes = require('./routes/winnerRoutes');
const loserRoutes = require('./routes/loserRoutes');

// app declaration
const app = express();

// CORS OPTIONS
// const opts = {
//     origin: 'http://localhost:3000'
// }

// app.use(cors(opts));

// CROSS ORIGIN RESOURCE SHARING
app.use(cors());

app.use(express.static(__dirname + '/public/'));

// middleware
app.use(bodyParser.json());
app.use(logger((token, req, res) => {
    console.log('BODY: ', req.body);
    console.log('QUERY: ', req.query);
    console.log('PARAMS: ',  req.params);
    console.log('HEADERS: ', req.headers);
    console.log('SESSION: ', req.session);
}));

app.use(session({
    secret: config.sessionSecret,
    saveUninitialized: false,
    resave: false
}))

// routes
app.use('/api/winners', winnerRoutes);
app.use('/api/losers', loserRoutes);

app.get('/api/bracket', (req, res, next) => {
    res.json(req.session.bracket);
});

app.post('/api/bracket', (req, res, next) => {
    if (!req.session.bracket) req.session.bracket = [];
    req.session.bracket.push(req.body);
    res.json(req.session.bracket);
})

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


