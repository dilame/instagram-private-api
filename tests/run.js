var should = require('should');
var Client = require('../client/v1');
var path = require('path');
var mkdirp = require('mkdirp');
var support = require('./support');
var _ = require('underscore');
var fs = require('fs');
var dir = './cookies';
var session;
var credentails; // [username, password, proxy]

mkdirp.sync(__dirname + '/cookies');
mkdirp.sync(__dirname + '/tmp');

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

    it("should not be problem to search account with session", function(done) {
        Client.Account.searchForUser(session, 'instagram')
            .then(function(account) {
                account.params.username.should.be.equal('instagram');
                done();
            }) 
    })

    it("should not be problem to show discover feed", function(done) {
        Client.discover(session, false, 5)
            .then(function(discover) {
                discover.length.should.be.above(0);
                discover[0].account.should.be.instanceOf(Client.Account)
                discover[0].mediaIds.should.be.Array();
                done();
            }) 
    })
})
