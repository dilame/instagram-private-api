var should = require('should');
var run = require('../proxy/server');
var fixtures = require('./fixtures.json');
var ClientV1 = require('../proxy-client/v1');
var credentials = require('./support').credentials();
var path = require('path');

const TRY_TO_CREATE_ACCOUNT = false

run({
    port: fixtures["server.port"],
    socketPort: fixtures["server.socket-port"],
    host: fixtures["server.host"],
    databaseDir: './tests/tmp/databases',
    cookiesDir: './tests/tmp/cookies',
    // proxy: 'http://127.0.0.1:8888',
    // interfaces: '10.0.0.2'
    suppressLog: true
})


 describe("proxy", function (params) {
     if(TRY_TO_CREATE_ACCOUNT)
         require('./proxy/v1/account')  
     require('./proxy/v1/qe')  
     require('./proxy/v1/addresses')  
     require('./proxy/v1/request')  
     require('./proxy/v1/discover')  
})


require('./server')

var proxyClientWithSession = function () {    
    require('./proxy-client/v1/registration')
    require('./proxy-client/v1/account')
    require('./proxy-client/v1/upload')
    require('./proxy-client/v1/media')
    require('./proxy-client/v1/thread')
    require('./proxy-client/v1/comment')
    require('./proxy-client/v1/like')
    require('./proxy-client/v1/relationship')
    require('./proxy-client/v1/hashtag')
    require('./proxy-client/v1/location')
    require('./proxy-client/v1/log')
}

describe("proxy-client", function (params) {
    require('./proxy-client/v1/server')  
    require('./proxy-client/v1/session')(proxyClientWithSession) 
})
