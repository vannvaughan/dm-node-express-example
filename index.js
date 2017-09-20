const express = require('express');
const bodyParser = require('body-parser')

const port = 3000;

const pokemon = [
    {
        name: 'Pikachu',
        number: 26
    },
    {
        name: 'Bulbasaur',
        number: 25
    },
    {
        name: 'Ivysaur',
        number: 2
    }
]

const app = express();

app.use(bodyParser.json());

app.get('/api/pokemon', function(req, res, next){
    res.json(pokemon)
})


app.post('/api/pokemon', (req, res, next) => {
    if(!req.body.name){
        res.status(418).json({err: "Name Required"});
    }
    pokemon.push(req.body);    
    res.status(200).json(pokemon)
})

app.delete('/api/pokemon', (req, res, next) => {
    res.json(pokemon.pop());
})


app.listen(port, () => {
    console.log(`BLAH BLAH BLAH: PORT ${port}`);
})

