const fs = require('fs/promises');
const videoCards = require('../db.json');
const path = require('path');   

exports.getOne = (videoCardId) => videoCards[videoCardId];

exports.save = (videoCard) => {
    videoCards.push({id: videoCards[videoCards.length - 1].id + 1, ...videoCard});  // {id: videoCards.length, ...videoCards} but now we don't know the last element
    let textData = JSON.stringify(videoCards, '', 4);
    fs.writeFile(path.resolve('src', 'db.json'), textData, {encoding: 'utf-8'})

}