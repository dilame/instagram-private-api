var util = require("util");
var _ = require("lodash");
var Resource = require("./resource");

function Link(session, params) {
    Resource.apply(this, arguments);
}

util.inherits(Link, Resource);
module.exports = Link;

Link.prototype.parseParams = function (json) {
    var hash = {};
    hash.text = json.text;
    hash.link = {
        url: json.link_context.link_url,
        title: json.link_context.link_title,
        summary: json.link_context.link_summary,
        image: {
            url: json.link_context.link_image_url
        }
    };
    return hash;
};

