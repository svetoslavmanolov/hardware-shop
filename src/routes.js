const express = require('express');
const homeController = require('./controllers/homeController');
const videoCardController = require('./controllers/videoCardController');

const router = express.Router();

router.get('/', homeController.index);
router.get('/about', homeController.about)
router.use('/video', videoCardController);

module.exports = router;

