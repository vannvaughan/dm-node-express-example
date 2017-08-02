const losers = [
    {
        team: 'Seahawks',
        size: 24
    },
    {
        team: 'Panthers',
        size: 14
    },
    {
        team: 'Giants',
        size: 18
    },
    {
        team: 'Redskins',
        size: 2
    }
];

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

// object shorthand for key value pairs with same name.
// { winners: winners, losers: losers }
module.exports = {
    winners,
    losers
}
