var ClientV1 = require('../../../proxy-client/v1');
var support = require('../../support');
var Promise = require('bluebird');
var should = require('should');
var _ = require('underscore');
var session;

describe("hashtag", function () {
    
    var session;
    
    before(function (d) {
        support.createOneTimeSession(function (s) {
            session = s
        }, d)
    })
    
    
    it("should be able to fetch discover", function(done) {
        ClientV1.discover(session, false)
            .then(function(discover) {
                discover.should.not.be.empty();
                _.each(discover, function(v) {
                    v.account.should.be.an.instanceOf(ClientV1.Account);
                    v.mediaIds.should.be.an.Array();
                })
                done();
            })
    })

})

