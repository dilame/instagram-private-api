var ClientV1 = require('../proxy-client/v1');
var fixtures = require('./fixtures.json');
var gm = require('gm').subClass({imageMagick: true});
var Promise = require('bluebird');
var fs = require('fs');
var path = require('path');
var Helpers = require('../helpers');
var request = require('request');
var _ = require('underscore');

exports.credentials = function() {
    return _.isString(process.env.CREDENTIALS) ? 
        JSON.parse(process.env.CREDENTIALS) :
        require('./credentials.json');
}
var credentials = exports.credentials();



var _session = null;

exports.createOneTimeSession = function (callback, done) {
    if(_session) {
        callback(_session);
        if(done) done();
        return;
    }
    var server = new ClientV1.Server(fixtures["server.host"], fixtures["server.port"], fixtures["server.socket-port"])
    var session = new ClientV1.Session(server);
    session.create(credentials.username, credentials.password).then(function(){
        _session = session;
        callback(session);
        if(done) done();
    });
}



var jpegToPng = function (srcJpg, srcPng) {
    return new Promise(function(resolve, reject) {
        var stream =  gm(srcJpg)
            .stream('PNG')
            .pipe(fs.createWriteStream(srcPng));
        stream.on('finish', function () {
            resolve(srcPng);
        });    
        stream.on('error', function (err) {
            reject(err);
        });    
    })
}

exports.jpegToPng = jpegToPng;


exports.randomImage = function() {
    var srcJpeg = path.resolve(__dirname + '/tmp/random-image.jpg');
    var srcPng = path.resolve(__dirname + '/tmp/random-image.png');
    var local = path.resolve(__dirname + '/image.jpg');
    return new Promise(function(resolve, reject) {
        gm(local)
            .colorize(
                Helpers.getRandomArbitrary(0, 249), 
                Helpers.getRandomArbitrary(0, 249), 
                Helpers.getRandomArbitrary(0, 249))
            .autoOrient()
            .resize(800, 800, "!")
            .crop(800, 800, 0, 0)
            .write(srcJpeg, function (err) {
                if(err) return reject(err);
                resolve(srcJpeg)
            });
    })
    .then(function(randomImageJpegPath) {
        return jpegToPng(randomImageJpegPath, srcPng);
    })
    .then(function(randomImagePngPath) {
        return [fs.createReadStream(srcJpeg), srcJpeg, srcPng];
    })
    
}


exports.downloadInstagramImage = function (url, w, h) {
    if(!w) w = 800;
    if(!h) h = 800;
    var srcJpeg = path.resolve(__dirname + '/tmp/downloaded-image.jpg');
    var srcPng = path.resolve(__dirname + '/tmp/downloaded-image.png');
    return new Promise(function (resolve, reject) {
        var stream = request(url.replace('150x150', w+'x'+h)).pipe(fs.createWriteStream(srcJpeg))
        stream.on('finish', function() {
            resolve(srcJpeg);
        })
        stream.on('error', function(err) {
            reject(err)
        })
    })
    .then(function(downloadedImageJpegPath) {
        return jpegToPng(downloadedImageJpegPath, srcPng);
    })
    .then(function(downloadedImagePngPath) {
        return [fs.createReadStream(srcJpeg), srcJpeg, srcPng];
    })
}