const router = require('express').Router();
const videoCardController = require('../services/videoCardService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const videoCard = req.body;

    if (videoCard.model.length < 2) {
        return res.status(400).send('Invalid model!');
    }
    
    try {
        await videoCardController.save(videoCard)
        res.redirect('/');
    } catch (error) {
        req.status(400).send(error)
    }
});

module.exports = router;
