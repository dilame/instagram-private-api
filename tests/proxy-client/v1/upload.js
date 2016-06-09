var ClientV1 = require('../../../proxy-client/v1');
var support = require('../../support');
var Promise = require('bluebird');
var should = require('should');
var _ = require('underscore');
var session;

describe("upload", function () {
    
    var session;
    
    before(function (d) {
        support.createOneTimeSession(function (s) {
            session = s
        }, d)
    })
    
    function shoulBeUpload(upload) {
        should(upload).not.be.empty()
        upload.should.be.instanceOf(ClientV1.Upload)
        upload.params.should.have.property('uploadId');
    }
    
    it("should be able to create upload", function(done) {
        support.randomImage()
            .spread(function (stream) {
                return ClientV1.Upload.photo(session, stream)
            })
            .then(function (upload) {
                shoulBeUpload(upload);
                done()
            })
    })
    
    
})

