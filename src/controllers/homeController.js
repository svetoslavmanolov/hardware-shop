 const videoCards = require('../db.json');
 
 exports.index = (req, res) => {
    res.render('index', { videoCards});
 }

 exports.about = (req, res) => {
    res.render('about');
 }