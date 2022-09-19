const express = require('express');
const homeController = require('./controllers/homeController');
const videoCardController = require('./controllers/videoCardController');

const router = express.Router();

router.use('/', homeController);
router.use('/video', videoCardController);

module.exports = router;

