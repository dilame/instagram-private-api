var fs = require('fs')
  , gm = require('gm').subClass({imageMagick: true});
var Helpers = require('../../../helpers');
var Promise = require("bluebird");


exports.resize = function(path) {
    if(!Helpers.fileExists(path))
        throw new Error("Path must be valid system path! File " + path + " not exists!");
    var newPath = path + parseInt(Math.random() * 1000);    
    var writeStream = fs.createWriteStream(newPath);
    var stream = gm(path)
        .resize(800, 800, '!')
        .stream('jpg')
    return new Promise(function(resolve, reject){
        stream.pipe(writeStream);
        stream.on('error', function(error){
            reject(error);
        }) 
        stream.on('finish', function(){
            fs.unlinkSync(path)
            resolve(newPath);
        }) 
    })    
}