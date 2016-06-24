var Promise = require('bluebird');
var should = require('should');
var _ = require('underscore');
var Addresses = require('../../../proxy/instagram/v1/addresses');
var sinon = require('sinon');
require('should-sinon');
var Client = require('../../../proxy/instagram/v1');


describe("request", function () {
    var device, session;
    
    beforeEach(function() {
        device = new Client.Device('SAMSUNG_GALAXY_S2', 'test');
        session = new Client.Session(device, __dirname + '/../../tmp/cookies/test.json');
    })
    
    afterEach(function() {
        Addresses.cleanUp();
    })
    
    var originClient = Client.Request.requestClient;
    after(function() {
        Client.Request.requestClient = originClient;
    })
    
    it("always merge and return options without local address since account id missing", function(done) {
        var request = new Client.Request(session);
        Addresses.register('0.0.0.1', true)
        request._mergeOptions()
            .then(function(opts) {
                should(opts).not.be.empty();
                opts.should.be.Object();
                should(opts.localAddress).be.empty();
                done();
            })
    });
    
    
    it("always merge and return options with local address", function(done) {
        var request = new Client.Request(session);
        session.getAccountId = function() {
            return Promise.resolve(1234);
        }
        Addresses.register('0.0.0.1', true)
        request
            .setResource('mediaInfo', {mediaId: 'test'})
            .setMethod('POST')
            ._mergeOptions()
            .then(function(opts) {
                should(opts).not.be.empty();
                opts.should.be.Object();
                opts.localAddress.should.not.be.empty();
                opts.localAddress.should.be.equal('0.0.0.1');
                request._groupAddressKey.should.be.equal('1234_DEFAULT');
                done();
            })
    });
    
    
    it("should step down with address", function(done) {
        Addresses.register('0.0.0.1', true);
        Addresses.register('0.0.0.2', true);
        var request = new Client.Request(session);
        session.getAccountId = function() {
            return Promise.resolve(1234);
        }
        var callback = sinon.spy();        
        var err = new Client.Exceptions.ActionSpamError();
        request
            .setResource('follow', {id: 'test'})
            .setMethod('POST')
            ._mergeOptions()
            .then(function(opts) {
                Addresses.stepDownInPriority = callback;
                try {request.afterError(err, {}, 0);} catch(e){}
                callback.should.be.calledWith('0.0.0.1', '1234_CREATE_RELATIONSHIP');
                return request._mergeOptions()
            })
            .then(function(opts) {
                Addresses.stepDownInPriority = callback;
                try {request.afterError(err, {}, 0);} catch(e){}
                callback.should.be.calledWith('0.0.0.2', '1234_CREATE_RELATIONSHIP');
                return request._mergeOptions()
            })
            .then(function(opts) {
                Addresses.stepDownInPriority = callback;
                try {request.afterError(err, {}, 0);} catch(e){}
                callback.should.be.calledWith('0.0.0.2', '1234_CREATE_RELATIONSHIP');
                done();
            })
    });
    
    
    it("should be able to rank address", function(done) {
        Addresses.register('0.0.0.1', true);
        Addresses.register('0.0.0.2', true);
        Addresses.register('0.0.0.3', true);
        var request = new Client.Request(session);
        session.getAccountId = function() {
            return Promise.resolve(12345);
        }     
        request._mergeOptions()
            .then(function(opts) {
                var addr1 = Addresses.rankAddress(request._groupAddressKey);
                var addr2 = Addresses.rankAddress(request._groupAddressKey);
                addr1.should.be.equal("0.0.0.2")
                addr2.should.be.equal("0.0.0.3")
                done();
            });
    });
    
    
    function createResponse() {
        var response = {
            statusCode: 200,
            body: '{"status": "ok", "test": true}',
            toJSON: function() {
                return response;
            }
        }
        return Promise.resolve(response)
    }
    
    
    function createError() {
        var err = new Error("Code err")    
        err.response = {
            statusCode: 429,
            body: '{"status": "fail", "spam": true}',
            toJSON: function() {
                return err.response;
            }
        }
        return Promise.reject(err);
    }
    
    
    it("should be able to rank and repeat address for all failed requests", function(done) {
        var index = 0;
        var addrs = ['0.0.0.1', '0.0.0.2', '0.0.0.3', '0.0.0.4'];
        _.each(addrs, function(ip) {
            Addresses.register(ip, true);
        });
        session.getAccountId = function() {
            return Promise.resolve(12345);
        }        
        Client.Request.requestClient = function(opts) {
            addrs[index].should.be.equal(opts.localAddress);
            var toReturn = index !== 3 ? createError() : createResponse();
            index += 1;
            return toReturn;
        }
        var request = new Client.Request(session)
        request.stepDownOnException.should.be.instanceOf(Function)
        request.repeatForAllAddressesOnStepDown.should.be.instanceOf(Function)
        request.setUrl('http://i.instagram.com/')
            .setResource('threadsBrodcastText')
            .setMethod('POST')
            .send()
            .then(function(json) {
                json.test.should.be.ok();
                index.should.be.equal(4)
                done()
            });
    });
    
    
    
    
    it("should be able to rank and repeat address for all failed requests and fail", function(done) {
        var index = 0;
        var addrs = ['0.0.0.1', '0.0.0.2', '0.0.0.3', '0.0.0.4'];
        _.each(addrs, function(ip) {
            Addresses.register(ip, true);
        });
        session.getAccountId = function() {
            return Promise.resolve(12345);
        }       
        Client.Request.requestClient = function(opts) {
            addrs[index].should.be.equal(opts.localAddress);   
            index += 1;
            return createError();
        }
        var request = new Client.Request(session)
        request.setUrl('http://i.instagram.com/')
            .setResource('threadsBrodcastText')
            .setMethod('POST')
            .send()
            .catch(function(error) {
                error.should.be.an.instanceOf(Client.Exceptions.ActionSpamError)
                index.should.be.equal(4)
                done()
            });
    });
    
    
    it("should not be problem do this without registred address", function(done) {
        session.getAccountId = function() {
            return Promise.resolve(12345);
        }    
        var index = 0;
        Client.Request.requestClient = function(opts) {
            opts.should.not.have.property('localAddress')       
            index += 1;
            return createError();
        }
        var request = new Client.Request(session)
        request.setUrl('http://i.instagram.com/')
            .setResource('threadsBrodcastShare')
            .setMethod('POST')
            .send()
            .catch(function(error) {
                index.should.be.equal(1);
                error.should.be.an.instanceOf(Client.Exceptions.ActionSpamError)
                done()
            });
    });
    
    it("should not be problem to use local session proxy", function(done) {
        session.setProxy('http://someproxy.com:80/')
        var request = new Client.Request(session);
        request._mergeOptions()
            .then(function(opts) {
                opts.proxy.should.be.equal('http://someproxy.com:80/');
                session.setProxy(null)
                done();
            });
    });
    
    
})

