var _ = require("underscore");
var util = require("util");


function DynamicProxyError(name, error, data) {
    this.name = name;
    this.message = (error || "DynamicProxyError obtain an error.");
    this.data = data || {};
}

util.inherits(DynamicProxyError, Error);
exports.DynamicProxyError = DynamicProxyError;


DynamicProxyError.prototype.getData = function () {
    return this.data;
}

DynamicProxyError.prototype.extendData = function (data) {
    _.extend(this.data, data);
    return this;
}

DynamicProxyError.prototype.serialize = function () {
    return {
        error: this.name,
        errorMessage: this.message,
        errorData: this.data,
        errorStack: this.stack 
    }
};
