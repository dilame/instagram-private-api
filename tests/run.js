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

// Client.Request.setProxy('http://127.0.0.1:8888')

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

    it("should not be problem to check username", function(done) {
        Client.Account.checkUsername(Client.Device.getRandom(), 'instagram')
            .then(function(result) {
                result.available.should.equal(false);
                done();
            }) 
    })

    it("should be able to receive checkpoint as boolean result", function(done) {
        Client.Web.Checkpoint.isRequired(session)
            .then(function(result) {
                result.should.be.Boolean();
                done();
            }) 
    })

    it("should be able to ask for json endpoint trough web-request", function(done) {
        var request = new  Client.Web.Request(session)
            .setMethod('GET')
            .setResource('userInfo', {id: 'instagram'})
            .setJSONEndpoint()
            .send()
            .then(function(result) {
                result.user.should.be.Object();
                result.user.username.should.be.String();
                result.user.username.should.equal('instagram')
                done();
            }) 
    })
})
