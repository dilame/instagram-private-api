'use strict';
var InstagramPrivateAPI = {};

InstagramPrivateAPI = {};
InstagramPrivateAPI.V1 = require('./v1');
InstagramPrivateAPI.Helpers = require('./helpers');
InstagramPrivateAPI.Device = require('./devices/device').Device;
module.exports = InstagramPrivateAPI;
