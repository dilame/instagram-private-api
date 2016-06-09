var ClientV1 = require('../../../proxy-client/v1');
var support = require('../../support');
var Promise = require('bluebird');
var should = require('should');
var _ = require('underscore');
var session;

describe("relationship", function () {
    
    var instagramOfficialId = 25025320;
    var session, randomAccount;
    
    before(function (d) {
        support.createOneTimeSession(function (s) {
            session = s
        }, d)
    })
    
    before(function (done) {
        ClientV1.Location.search(session, 'New York')
            .then(function (places) {
                var place = _.first(places);
                if(!place) throw new Error("No place found!")
                return ClientV1.Media.forLocation(session, place.id)
            })
            .then(function (json) {
                var medium = _.sample(json.media);
                randomAccount = medium.account;
                done()
            })
    })
    
    
    function shouldBeRelationship(relationship) {
        should(relationship).not.be.empty();
        relationship.should.be.instanceOf(ClientV1.Relationship)
    }
    
    it("should be able to follow and unfollow", function(done) {
        ClientV1.Relationship.create(session, randomAccount.id)
            .then(function (r) {
                shouldBeRelationship(r)
                return ClientV1.Relationship.destroy(session, randomAccount.id)
            })
            .then(function (r) {
                shouldBeRelationship(r)
                done()
            })
    })
    
    
    it("shoudl be able to get one", function(done) {
        ClientV1.Relationship.get(session, randomAccount.id)
            .then(function (r) {
                shouldBeRelationship(r);
                done();
            })
    })
    
    
    it("shoudl be able to get many", function(done) {
        ClientV1.Relationship.getMany(session, randomAccount.id)
            .then(function (arr) {
                _.each(arr, shouldBeRelationship);
                done();
            })
    })
    
    
    it("shoudl not be able to get many if user ids is empty", function(done) {
        ClientV1.Relationship.getMany(session, [])
            .catch(function (error) {
                error.name.should.be.equal('InvalidParamsError')
                done();
            })
    })

})

