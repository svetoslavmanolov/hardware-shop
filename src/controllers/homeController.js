const router = require('express').Router();
const videoCards = require('../db.json');

router.get('/', (req, res) => {
    res.render('index', { videoCards });
});

router.get('/about', (req, res) => {
    res.render('about');
});


module.exports = router;
