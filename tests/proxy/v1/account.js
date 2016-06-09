var Promise = require('bluebird');
var should = require('should');
var _ = require('underscore');
var credentials = require('../../support').credentials();
var sinon = require('sinon');
var fs = require('fs');
require('should-sinon');
var Client = require('../../../proxy/instagram/v1');

function random(len) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i=0; i < len; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

describe("Account", function () {
    var device, session;
    
    var mailDomain = _.sample(['gmail.com', 'yahoo.com', 'bing.com', 'mail.uk', 'mail.ru', 'mail.es']);
    var nickname = random(10).toLowerCase();
    var randomMail = nickname + "@" + mailDomain;
    
    before(function() {
        console.info("Using nickname %s", nickname)
        device = new Client.Device('SAMSUNG_GALAXY_S2', nickname);
        var cookie = __dirname + '/../../tmp/cookies/'+nickname+'.json';
        session = new Client.Session(device, cookie);
    })

    it("should have ability to create new account", function(done) {
        Client.Account.create(session, randomMail, nickname, 'Instagram')
            .spread(function(account, discover) {
                account.should.be.instanceOf(Client.Account);   
                discover.should.be.Object();
                done()
            })
    });    
    
})

