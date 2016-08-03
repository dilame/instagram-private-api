var should = require('should');
var Client = require('../client/v1');
var path = require('path');
var support = require('./support');
var session;
var credentails; // [username, password, proxy]

// For self-signed certificates
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

describe("Sessions", function () {
    before(function (done) {
        // Wait one hour
        this.timeout(60 * 60 * 1000);
        support.credentials()
            .then(function (auth) {
                credentails = auth;
                done();
            });
    });

    it("should have credentials", function () {
        credentails.length.should.be.equal(3);
        credentails[0].should.be.String()
        credentails[1].should.be.String()
    });

    it("should not be problem to create sessions", function (done) {
        var device = new Client.Device('SAMSUNG_GALAXY_S2', credentails[0]);
        var storage = new Client.CookieFileStorage(__dirname + '/cookies/'+credentails[0]+'.json');
        var promise = Client.Session.create(device, storage, credentails[0], credentails[1], credentails[2]);
        promise.then(function(sessionInstance) {
            session = sessionInstance;
        	session.should.be.instanceOf(Client.Session);
            done();
        });
    });

    it("should not be problem to get account from session", function(done) {
        session.getAccount().then(function(acc){
            acc.should.be.instanceOf(Client.Account);
            acc.params.should.have.property('username')
            done();
        })
    })
})
