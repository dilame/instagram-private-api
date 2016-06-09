var ClientV1 = require('../../../proxy-client/v1');
var support = require('../../support');
var Promise = require('bluebird');
var should = require('should');
var _ = require('underscore');
var session;

describe("comment", function () {
    
    var instagramOfficialId = 25025320;
    var session;
    
    before(function (d) {
        support.createOneTimeSession(function (s) {
            session = s
        }, d)
    })
    
    const COMMENTS = [
        "Nice place :P",
        "Nice",
        "Beautiful place",
        "New York is top!",
        "New York is top :P",
        "New Yooooork",
        "Spent childhood over there",
        "cool!",
        "so pro place!",
    ]
    
    function shouldBeComment(comment) {
        should(comment).not.be.empty();
        comment.should.be.instanceOf(ClientV1.Comment)
        comment.account.should.be.instanceOf(ClientV1.Account)
        comment.params.account.should.have.property('id');
    }
    
    it("should be able to create", function(done) {
        ClientV1.Location.search(session, 'New York')
            .then(function (places) {
                var place = _.first(places);
                if(!place) throw new Error("No place found!")
                return ClientV1.Media.forLocation(session, place.id)
            })
            .then(function (json) {
                var sample = _.sample(json.media);
                var comment = _.sample(COMMENTS);
                if(!sample) throw new Error("No medium found!")
                return ClientV1.Comment.create(session, sample.id, comment)
            })
            .then(function (comment) {
                shouldBeComment(comment);
                done();
            });
    })

})

