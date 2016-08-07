var CONSTANTS = require('./constants');
var _ = require('underscore');
var Helpers = require('../../helpers');
var md5 = require('js-md5');


function Device(name, username) {
    if(!_.isObject(CONSTANTS.DEVICES[name]))
        throw new Error("Device you pass is not available")
    if(!_.isString(username))
        throw new Error("`Device` class needs username to be able generate correlated device_id seed!");
    this._version = CONSTANTS.PRIVATE_KEY.APP_VERSION;
    this._device = CONSTANTS.DEVICES[name.toUpperCase()];
    this._androidVersion = Helpers.getRandomArbitrary(18, 23);
    this.name = name;
    this.username = username;
}

module.exports = Device;

Object.defineProperty(Device.prototype, "id", {
    get: function() { 
        return 'android-' + this.md5.slice(0, 16)
    }
});

Object.defineProperty(Device.prototype, "md5", {
    get: function() { 
        return md5(this.name + this.username)
    }
});


Object.defineProperty(Device.prototype, "version", {
    set: function(version) { 
        this.setVersion(version);
    }
});


Object.defineProperty(Device.prototype, "payload", {
    get: function() { 
        var device = _.pick(_.clone(this._device), 'manufacturer', 'model');
        device.android_version = this._device.api;
        device.android_release = this._device.release;
        return device;
    }
});


Device.prototype.setVersion  = function(version) {
    this._version = version;
}


Device.prototype.userAgent = function(version) {
    var device = this._device;
    var agent = [device.api + "/" + device.release, device.dpi + 'dpi', 
        device.resolution, device.model, device.language];
    return CONSTANTS.instagramAgentTemplate({
        agent: agent.join('; '),
        version: version || this._version
    })
}


Device.prototype.getIndex = function () {
    var devices = _.keys(CONSTANTS.DEVICES);
    var index = _.indexOf(devices, this.name);
    return index == -1 ? 0 : index;
};


Device.getDeviceSafe = function(arg, username, version) {
    var deviceName = _.isNumber(arg) ? _.keys(CONSTANTS.DEVICES)[arg] : CONSTANTS.DEVICES[arg];
    if(!deviceName)
        deviceName = _.sample(_.keys(CONSTANTS.DEVICES));
    return new Device(deviceName, username, version);
};


Device.getRandom = function(version) {
    var deviceName = _.sample(_.keys(CONSTANTS.DEVICES));
    return new Device(deviceName, Math.random().toString(), version);
};