const fs = require('fs/promises');
const videoCards = require('../db.json');
const path = require('path');   

//exports.getOne = (videoCardId) => videoCards[videoCardId];
exports.getOne = (videoCardId) => videoCards.find(x => x.id === Number(videoCardId));

exports.getAll = (search = '', fromInput, toInput) => {
    const from = Number(fromInput) || 0;
    const to = Number(toInput) || 5000;
    const result = videoCards
    .filter(x => x.model.toLowerCase().includes(search.toLowerCase()))
    .filter(x => x.price >= from && x.price <= to)
    return result;
};

exports.save = (videoCard) => {
    videoCards.push({id: videoCards[videoCards.length - 1].id + 1, ...videoCard});  // {id: videoCards.length, ...videoCards} but now we don't know the last element
    let textData = JSON.stringify(videoCards, '', 4);
    fs.writeFile(path.resolve('src', 'db.json'), textData, {encoding: 'utf-8'})

}