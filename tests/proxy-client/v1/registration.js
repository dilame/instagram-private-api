var ClientV1 = require('../../../proxy-client/v1');
var Client = require('../../../client/v1');
var fixtures = require('../../fixtures');
var credentials = require('../../credentials.json');
var Promise = require('bluebird');
var should = require('should');
var _ = require('underscore');

describe("registration", function () {
    var server;
    var origin = Client.Account._create
    
    before(function() {
        server = new ClientV1.Server(fixtures["server.host"], fixtures["server.port"])
        Client.Account._create = function(session, email, username, password, name) {
            return Client.Session.create(session.device, username, password)
                .then(function(s) {
                    return s.getAccount()
                })
        }
    });
    
    after(function() {
        Client.Account._create = origin;
    })
    
    it("should be able to create new account", function(done) {
        ClientV1.Account.create(server, 'randomEmail@random.com', credentials.username, credentials.password, 'Doesnt Matter')
            .then(function(data) {
                should(data).not.be.empty();
                data.should.have.property('account');
                data.should.have.property('session');
                data.should.have.property('discover');
                data.should.have.property('agent');
                data.should.have.property('created');
                data.account.should.be.instanceOf(ClientV1.Account);
                data.session.should.be.instanceOf(ClientV1.Session);
                data.discover.should.be.an.Array();
                data.discover.should.not.be.empty();
                _.each(data.discover, function(v) {
                    v.account.should.be.an.instanceOf(ClientV1.Account);
                    v.mediaIds.should.be.an.Array();
                })
                data.created.should.be.Number();
                done();
            })
    })
    
    it("should not be able to create new account", function(done) {
        ClientV1.Account.create(server, '@random.!', credentials.username, credentials.password)
            .catch(function(e) {
                should(e).not.be.empty();
                e.name.should.be.equal('InvalidParamsError');
                done();
            })
    })

    
})

