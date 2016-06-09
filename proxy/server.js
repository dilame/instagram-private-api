var path = require('path');
var _ = require('underscore');
var express = require('express');
var fs = require('fs');

module.exports = function(options) {
    var config = require('./config/config')(options || {});
    var exploitMiddleware = require('./config/middlewares/exploit')
    var errorMiddleware = require('./config/middlewares/error')
    var app = express();
    require('./config/express')(app);
    app.use(exploitMiddleware.initialize);
    require('./config/routes')(app); 
    app.use(errorMiddleware.apiError);
    app.use(errorMiddleware.fatalError);
    app.use(errorMiddleware.notFoundError);
    app.listen(config.port, config.host);
    console.info('Proxy APP started on %s:%s', config.host, config.port);   
}