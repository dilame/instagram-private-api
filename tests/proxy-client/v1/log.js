var ClientV1 = require('../../../proxy-client/v1');
var support = require('../../support');
var requestLog = require('../../../proxy/models/request-log');
var Promise = require('bluebird');
var should = require('should');
var _ = require('underscore');
var session;

describe("log", function () {
    
    var instagramOfficialId = 25025320;
    var notExistingId = 2502532124;
    var session;
    
    before(function (d) {
        support.createOneTimeSession(function (s) {
            session = s
        }, d)
    })
    
    function shouldBeLog(l) {
        should(l).not.be.empty();
        l.should.be.an.instanceOf(ClientV1.Log);
        l.should.have.property('id')
        l.params.should.have.property('request')
        l.params.request.should.be.an.Object();
        l.params.request.headers.should.have.property('cookies');
        l.params.request.headers.cookies.should.be.an.Array();
        l.params.request.headers.cookies.should.not.be.empty();
        l.params.should.have.property('response')
        l.params.should.have.property('instagramId')
    }
    
    
    it("should be able to create success log", function(done) {
        requestLog.remove({})
            .then(function () {
                return ClientV1.Relationship.create(session, instagramOfficialId);
            })
            .then(function (r) {
                return ClientV1.Log.flush(session, 2)
            })
            .then(function (logs) {
                logs.length.should.be.equal(1);
                logs.should.be.an.Array();
                _.each(logs, shouldBeLog);
                var first = _.first(logs);
                first.params.resource.should.not.be.empty()
                first.params.resource.should.be.equal('follow');
                return ClientV1.Log.flush(session)
            })
            .then(function(logs) {
                logs.length.should.be.equal(0);
                logs.should.be.an.Array();
                done();
            })
    })
    
    it("should be able to create fail log", function(done) {
        ClientV1.Relationship.create(session, notExistingId)
            .catch(function (error) {
                error.should.be.an.instanceOf(ClientV1.Exceptions.DynamicProxyError)
                error.name.should.be.equal("NotFoundError")
                return ClientV1.Log.flush(session, 1)
            })
            .then(function (logs) {
                logs.length.should.be.equal(1);
                logs.should.be.an.Array();
                _.each(logs, shouldBeLog);
                var first = _.first(logs);
                first.params.response.statusCode.should.be.equal(404);
                done();
            })
    })
    
    it("should be able to keep max records", function(done) {
        requestLog.remove({})
            .then(function () {
                return _.times(100, function (num) {
                    return requestLog.create({
                        instagramId: num,
                        request: {},
                        response: {},
                        attemp: 0,
                        resource: 'test',
                        created: (new Date().getTime() - 100000) + (num * 1000)
                    })
                })
            })
            .then(function () {
                return requestLog.count({})
            })
            .then(function (count) {
                should(count).be.Number()
                should(count).be.equal(100);
                return requestLog.keepMaxRecords(20);
            })
            .then(function (remove) {
                return requestLog.count({})
            })
            .then(function (count) {
                should(count).be.Number()
                should(count).be.equal(20);
                done();
            })
    })

})

