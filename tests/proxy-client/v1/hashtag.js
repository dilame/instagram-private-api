var ClientV1 = require('../../../proxy-client/v1');
var support = require('../../support');
var Promise = require('bluebird');
var should = require('should');
var _ = require('underscore');
var session;

describe("hashtag", function () {
    
    var session;
    
    before(function (d) {
        support.createOneTimeSession(function (s) {
            session = s
        }, d)
    })
    
    
    function shouldBeHashtag(hashtag) {
        should(hashtag).not.be.empty();
        hashtag.should.be.instanceOf(ClientV1.Hashtag);
        hashtag.params.should.have.property('id');
        hashtag.params.should.have.property('name');
        hashtag.params.should.have.property('mediaCount');
        hashtag.id.should.be.a.Number();
    }
    
    it("should be able to search", function(done) {
        ClientV1.Hashtag.search(session, 'instagram')
            .then(function (hashtags) {
                hashtags.should.be.an.Array();
                hashtags.should.not.be.empty();
                _.each(hashtags, shouldBeHashtag);
                done();
            })
    })

})

