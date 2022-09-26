const router = require('express').Router();
const videoCardService = require('../services/videoCardService');

router.get('/', (req, res) => {
    let { search, from, to } = req.query;
    const videoCards = videoCardService.getAll(search, from, to);


    res.render('index', { videoCards, search, from, to });



});

router.get('/about', (req, res) => {
    res.render('about');
});


module.exports = router;
