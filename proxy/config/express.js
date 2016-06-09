var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var SessionModel = require('../models/session');
var config = require('./config');
var Promise = require('bluebird');
var _ = require('underscore');


var ExpressValidators = {
    
    // Is session key available?
    isKeyAvailable: function (key) {
        return new Promise(function (resolve, reject) {
            SessionModel.getByKey(key).then(function (model) {
                if (!model) return reject();
                resolve();
            }, reject);
        });
    },

    isArray: function (value) {
        return Array.isArray(value);
    },

    inArray: function (value, array) {
        return _.contains(array, value);
    },

    lengte: function (param, num) {
        return param.length >= num;
    },

    validIGUsername: function (username) {
        return /^[a-zA-Z0-9_\.]+$/.test(username)
    }
    
}


module.exports = function (app) {
    if(!config.get().suppressLog)
        app.use(morgan('combined'));    
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json({ 
        type: 'application/json' 
    }))
    app.use(expressValidator({
        customValidators: ExpressValidators
    }));
};
