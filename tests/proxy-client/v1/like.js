var ClientV1 = require('../../../proxy-client/v1');
var support = require('../../support');
var Promise = require('bluebird');
var should = require('should');
var _ = require('underscore');
var session;

describe("like", function () {
    
    var instagramOfficialId = 25025320;
    var session;
    
    before(function (d) {
        support.createOneTimeSession(function (s) {
            session = s
        }, d)
    })
    
    
    function shouldBeLike(like) {
        should(like).not.be.empty();
        like.should.be.instanceOf(ClientV1.Like);
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
                return ClientV1.Like.create(session, sample.id);
            })
            .then(function (like) {
                shouldBeLike(like);
                done();
            });
    })

})

