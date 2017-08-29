var CONSTANTS = require('./constants');
var _ = require('lodash');
var md5 = require('js-md5');

// Thanks to @mgp25 for such a list
var devices = require('./devices.json');


function Device(username) {
    if(!_.isString(username))
        throw new Error("`Device` class needs username to be able generate correlated phone_id seed!");
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
        return md5(this.username)
    }
});


// Useful for getting device from csv based on line number
Object.defineProperty(Device.prototype, "md5int", {
    get: function() { 
        if(!this._md5int)
            this._md5int = parseInt(parseInt(this.md5, 32) / 10e32);
        return this._md5int;
    }
});


Object.defineProperty(Device.prototype, "api", {
    get: function() { 
        if(!this._api)
            this._api = 18 + (this.md5int % 5);
        return this._api;
    },
    set: function(api) { 
        this._api = api;
    }
});


Object.defineProperty(Device.prototype, "release", {
    get: function() { 
        if(!this._release)
            this._release = ['4.0.4', '4.3.1', '4.4.4', '5.1.1', '6.0.1'][this.md5int % 5];
        return this._release;
    },
    set: function(release) { 
        this._release = release;
    }
});


Object.defineProperty(Device.prototype, "info", {
    get: function() { 
        if(this._info) return this._info;
        var line = devices[this.md5int % devices.length];
        var info = {
            manufacturer: line[0],
            device: line[1],
            model: line[2]
        };
        this._info = info;
        return info;
    },
    set: function(info) {
        this._info = info;
    }
});


Object.defineProperty(Device.prototype, "payload", {
    get: function() {
        var payload = {};
        payload.manufacturer = this.info.manufacturer;
        payload.model = this.info.model;
        payload.android_version = this.api;
        payload.android_release = this.release;
        return payload;
    }
});


Object.defineProperty(Device.prototype, "dpi", {
    get: function() {
        if(!this._dpi)
            this._dpi = ['801', '577', '576', '538', '515', '424', '401', '373'][this.md5int % 8];
        return this._dpi;
    },
    set: function(set) {
        return this._dpi = set;
    }
});


Object.defineProperty(Device.prototype, "resolution", {
    get: function() {
        if(!this._resolution)
            this._resolution = ['3840x2160', '1440x2560', '2560x1440', '1440x2560',
             '2560x1440', '1080x1920', '1080x1920', '1080x1920'][this.md5int % 8];
        return this._resolution;
    },
    set: function(resolution) {
        return this._resolution = resolution;
    }
});


Object.defineProperty(Device.prototype, "language", {
    get: function() {
        if(!this._language)
            this._language = 'en_US';
        return this._language;
    },
    set: function(lang) {
        return this._language = lang;
    }
});


Device.prototype.userAgent = function(version) {
    var agent = [this.api + "/" + this.release, this.dpi + 'dpi', 
        this.resolution, this.info.manufacturer, this.info.model, this.info.device, this.language];    
    return CONSTANTS.instagramAgentTemplate({
        agent: agent.join('; '),
        version: version || CONSTANTS.PRIVATE_KEY.APP_VERSION
    })
}