var ClientV1 = require('../../../proxy-client/v1');
var fixtures = require('../../fixtures');
var credentials = require('../../credentials.json');
var should = require('should');
var fs = require('fs')
var doneCallback;

describe("session", function () {
    
    var server, session;
    
    beforeEach(function() {
        server = new ClientV1.Server(fixtures["server.host"], fixtures["server.port"])
        session = new ClientV1.Session(server, credentials.username, credentials.password);
    })
    
    it("should have empty key", function () {
        should(session.getKey()).not.be.a.String();
    })    
    
})


describe("session should be able", function() {
    var server, session;

    before(function(done) {
        fs.truncateSync(__dirname + '/../../tmp/databases/sessions.db', 0);
        server = new ClientV1.Server(fixtures["server.host"], fixtures["server.port"])
        session = new ClientV1.Session(server);
        session.create(credentials.username, credentials.password).then(function() {
            done()
        })
    })
    
    it("create valid session", function() {
        should(session.getKey()).be.a.String();
        should(session.getAccount()).be.a.instanceOf(ClientV1.Account);
    })
    
    it("server check should indicate +1 session", function(done) {
        server.check().then(function (json) {
            json.should.not.be.empty();
            json.sessions.should.be.equal(1);
            done();
        })
    })
    
    it("update account", function(done) {
        session.updateAccount().then(function() {
            session.getAccount().should.be.a.instanceOf(ClientV1.Account);
            session.getAccount().params.should.have.property('biography')
            session.getAccount().params.biography.should.be.a.String();  
            done()
        })
    })
    
    it("mark acc as as valid", function(done) {
        session.isValid().then(function(bool) {
            should(bool).be.ok();
            done()
        })
    }) 
    
    after(function() {
        doneCallback();
    });

})


module.exports = function(done) {
    doneCallback = done;
}