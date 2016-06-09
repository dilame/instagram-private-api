var Promise = require('bluebird');
var should = require('should');
var _ = require('underscore');
var credentials = require('../../support').credentials();
var sinon = require('sinon');
var fs = require('fs');
require('should-sinon');
var Client = require('../../../proxy/instagram/v1');


describe("QE", function () {
    var device, original, session;
    original = Client.QE.sync;
    
    before(function() {
        device = new Client.Device('SAMSUNG_GALAXY_S2', credentials.username);
    })
    
    afterEach(function() {
        Client.QE.sync = original;
    })

    it("should call qe if not logged in ", function(done) {
        var callback = sinon.spy(); 
        var cookie = __dirname + '/../../tmp/cookies/'+credentials.username+'.json';
        fs.truncateSync(cookie, 0);
        Client.QE.sync = callback;
        Client.Session.create(device, credentials.username, credentials.password)
            .then(function(s) {
                callback.should.be.called();   
                s.should.be.instanceOf(Client.Session) 
                session = s
                done()
            })
    });    
    

    it("should not be a problem to sync data", function(done) {
        var callback = sinon.spy(); 
        Client.QE.sync(session)
            .then(function(experiments) {
                experiments.should.be.an.Object();
                done()
            })
    });    
    
})

