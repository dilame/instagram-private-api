var CONSTANTS = require('./constants');
var _ = require('underscore');

var URLs = {};
_.each(CONSTANTS.ROUTES, function (val, key) {
    URLs[key] = _.template(val);
});

exports.getUrl = function(key, data) {
    if(!_.isFunction(URLs[key])) 
        throw new Error("Url with key `"+ key +"` is not available");
    return CONSTANTS.API_ENDPOINT + URLs[key](data || { });   
}


