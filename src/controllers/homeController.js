const router = require('express').Router();
const videoCards = require('../db.json');

router.get('/', (req, res) => {
    res.render('index', { videoCards });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.post('/create', (req, res) => {
    console.log(req.body)
    res.send('Successful submit!')
})

module.exports = router;

//  exports.index = (req, res) => {
//     res.render('index', { videoCards});
//  }