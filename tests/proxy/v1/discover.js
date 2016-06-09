var Promise = require('bluebird');
var should = require('should');
var _ = require('underscore');
var credentials = require('../../support').credentials();
var sinon = require('sinon');
var fs = require('fs');
require('should-sinon');
var Client = require('../../../proxy/instagram/v1');


describe("Discover", function (done) {
    var device, session;
    
    before(function(done) {
        device = new Client.Device('SAMSUNG_GALAXY_S2', credentials.username);
        Client.Session.create(device, credentials.username, credentials.password)
            .then(function(s) {
                session = s
                done()
            });
    })
    
    it("should return valid discover feed", function(done) {
        Client.discover(session, true)
            .then(function(discover) {
                should(discover).not.be.empty();
                discover.should.be.an.Array();
                _.each(discover, function(val) {
                    val.should.have.property('account')
                    val.should.have.property('mediaIds')
                    val.account.should.be.instanceOf(Client.Account)
                    val.mediaIds.should.be.Array();
                })
                done()
            })
    });    
    
})

