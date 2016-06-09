var ClientV1 = require('../../../proxy-client/v1');
var fixtures = require('../../fixtures');

describe("server", function () {
    
    it("should create address", function () {
        var server = new ClientV1.Server(fixtures["server.host"], fixtures["server.port"])
        server.address().should.be.a.String();
    })
    
    
    it("check should be ok", function (done) {
        var server = new ClientV1.Server(fixtures["server.host"], fixtures["server.port"])
        var promise = server.check()
        promise.then(function() {
            promise.should.be.a.Promise();
            promise.should.not.be.rejected();
            done()
        })
    })
    
})