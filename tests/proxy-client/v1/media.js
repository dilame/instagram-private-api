var ClientV1 = require('../../../proxy-client/v1');
var support = require('../../support');
var Promise = require('bluebird');
var should = require('should');
var _ = require('underscore');
var resemble = require('node-resemble-js');
var session;

describe("media", function () {
    
    var instagramOfficialId = 25025320;
    var session;
    
    before(function (d) {
        support.createOneTimeSession(function (s) {
            session = s
        }, d)
    })
    
    function shouldBeAMedium(medium) {
        medium.should.not.be.empty();
        medium.id.should.match(/^(\d)*_(\d)*$/);
        medium.params.should.have.property('code')
        medium.account.should.be.an.instanceOf(ClientV1.Account);
        medium.params.account.should.have.property('id');
        _.each(medium.comments, function (comment) {
            comment.should.be.an.instanceOf(ClientV1.Comment)
        })
    }
    
    
    function shoudlBeACollection(json, mediaNotAbove) {
        should(json).not.be.empty();
        json.should.have.property('media')
        json.media.should.be.an.Array();
        _.each(json.media, shouldBeAMedium);
        if(_.isNumber(mediaNotAbove))
            json.media.length.should.not.be.above(mediaNotAbove);
        json.should.have.property('cursor')
        json.should.have.property('hasMoreAvailable')
    }
    
    
    it("should be able to fetch media for account", function (done) {            
        ClientV1.Media.forAccount(session, instagramOfficialId, 10)
            .then(function(json) {
                shoudlBeACollection(json);
                done();
            });
    });
    
    
    it("should be able to fetch media for hashtag", function (done) {                     
        ClientV1.Media.forHashtag(session, 'instagram')
            .then(function(json) {
                shoudlBeACollection(json);
                return [ClientV1.Media.forHashtag(session, 'instagram', json.cursor), json];
            })
            .spread(function(newCursorJson, json) {
                newCursorJson.media[0].id.should.not.be.equal(json.media[0].id);
                done();
            })
    })
    

    it.only("should be able to fetch media which are self-liked", function (done) {            
        ClientV1.Media.liked(session)
            .then(function(json) {
                shoudlBeACollection(json);
                return [ClientV1.Media.liked(session, json.cursor), json];
            })
            .spread(function(newCursorJson, json) {
                shoudlBeACollection(newCursorJson);
                newCursorJson.cursor.should.be.String()
                newCursorJson.cursor.should.not.be.equal(json.cursor);
                done();
            })
    })
    
    
    it("should be able to fetch media for location", function (done) {      
        var place;
        ClientV1.Location.search(session, 'New York')
            .then(function (places) {
                place = _.first(places);
                if(!place) throw new Error("No place found for 'New York'");
                return ClientV1.Media.forLocation(session, place.id)
            })                 
            .then(function(json) {
                shoudlBeACollection(json);
                return [ClientV1.Media.forLocation(session, place.id, json.cursor), json];
            })
            .spread(function(newCursorJson, json) {
                newCursorJson.media[0].id.should.not.be.equal(json.media[0].id)
                done();
            })
    })
    
    
    it("should be able to fetch medium", function (done) {       
        ClientV1.Media.forAccount(session, instagramOfficialId, 1)
            .then(function(json) {
                var medium = _.first(json.media);
                medium.should.not.be.empty();
                return ClientV1.Media.show(session, medium.id);
            })
            .then(function(medium){    
                shouldBeAMedium(medium);
                done();
            });
    })
    
    
    
    it("should be able to upload & configure medium and delete medium", function (done) {  
        this.timeout(30000)  
        var middle = ['von', 'fan', 'de', 'es', 'gra', 
            'du', 'pro', 'ensta', 'repla', 'zoro', 'ok', 'fon', 'fona', 'soro', 'let'];
        var name = 'Griber '+_.sample(middle)+' John';    
        var caption = 'My name is ... ' + name;    
        var pngPath, last;
        support.randomImage()
            .spread(function(readstream, jpeg, png) {
                pngPath = png;
                return ClientV1.Upload.photo(session, readstream)
            })
            .then(function(upload) {
                return ClientV1.Media.create(session, upload, caption)
            })
            .then(function(medium) {
                shouldBeAMedium(medium);
                medium.params.caption.should.be.equal(caption)
                return ClientV1.Media.forAccount(session, session.getAccount().id, 1)
            })
            .then(function(json) {
                json.media.length.should.be.above(0);
                last = _.first(json.media);
                var image = _.findWhere(last.params.images, {width: 800});
                return support.downloadInstagramImage(image.url);
            })
            .spread(function (stream, jpg, png) {
                return new Promise(function (resolve, reject) {
                    resemble(pngPath)
                        .compareTo(png)
                        .ignoreColors()
                        .onComplete(function (data) {
                            resolve(data);
                        });  
                })
            })
            .then(function(data) {
                data.misMatchPercentage.should.be.belowOrEqual(25);
                return last.delete()
            })
            .then(function () {
                return ClientV1.Media.forAccount(session, session.getAccount().id, 1)
            })
            .then(function (json) {
                var first = _.first(json.media);
                if(!first) return done();
                should(first.id).not.equal(last.id);
                done();
            })
    })
    
    
    
})

