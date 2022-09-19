const fs = require('fs/promises');
const videoCards = require('../db.json');
const path = require('path');   


exports.save = (videoCard) => {
    videoCards.push(videoCard)
    let textData = JSON.stringify(videoCards, '', 4);
    fs.writeFile(path.resolve('src', 'db.json'), textData, {encoding: 'utf-8'})
}