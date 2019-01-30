var util = require("util");
var _ = require("lodash");
var Resource = require("./resource");

function Placeholder(session, params) {
    Resource.apply(this, arguments);
}

util.inherits(Placeholder, Resource);
module.exports = Placeholder;

Placeholder.prototype.parseParams = function (json) {
    var hash = {};
    hash.is_linked = json.is_linked;
    hash.title = json.title;
    hash.message = json.message;
    return hash;
};
