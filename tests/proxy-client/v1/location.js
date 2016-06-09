var ClientV1 = require('../../../proxy-client/v1');
var support = require('../../support');
var Promise = require('bluebird');
var should = require('should');
var _ = require('underscore');
var session;

describe("location", function () {
    
    var session;
    
    before(function (d) {
        support.createOneTimeSession(function (s) {
            session = s
        }, d)
    })
    
    
    function shouldBeLocation(location) {
        should(location).not.be.empty();
        location.should.be.instanceOf(ClientV1.Location);
        location.params.should.have.property('title');
        location.params.should.have.property('id');
        location.id.should.be.a.Number();
    }
    
    it("should be able to search", function(done) {
        ClientV1.Location.search(session, 'New York')
            .then(function (places) {
                places.should.be.an.Array();
                places.should.not.be.empty();
                _.each(places, shouldBeLocation);
                done();
            })
    })

})

