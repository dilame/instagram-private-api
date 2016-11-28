'use strict';
var Promise = require('bluebird');
Promise.config({longStackTraces: true});

var InstagramPrivateAPI = {};

InstagramPrivateAPI = {};
InstagramPrivateAPI.V1 = require('./client/v1');
InstagramPrivateAPI.Helpers = require('./helpers');
module.exports = InstagramPrivateAPI;