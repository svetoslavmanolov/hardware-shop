const router = require('express').Router();
const videoCards = require('../db.json');
const fs = require('fs/promises');
const path = require('path');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req , res) => {
    const videoCard = req.body;

    if(videoCard.model.length < 2) {
        return res.status(400).send('Invalid model!');
    }

    videoCards.push(videoCard);
    fs.writeFile(path.resolve('src', 'db.json'), JSON.stringify(videoCards, '', 4), {encoding: 'utf-8'})
    .then(() => {
        res.redirect('/');
    })
    .catch(err => {
        req.status(400).send(err);
    })

})

module.exports = router;
