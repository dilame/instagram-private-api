var rp = require('request-promise');
var fixtures = require('./fixtures.json');

describe('server', function() {
    it("should start", function (done) {
        var url = "http://" + fixtures["server.host"] + ":" + fixtures["server.port"] + "/v1"
        return rp.get(url).then(function (json) {
            json = JSON.parse(json);
            json.should.have.property('node', true)
            json.should.have.property('sessions')
            json.sessions.should.be.a.Number();
            done()
        })
    })
});
