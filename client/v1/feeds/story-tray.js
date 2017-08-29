var _ = require('lodash');

function StoryTray(session) {
    this.session = session;
}

module.exports = StoryTray;
var Request = require('../request');
var Helpers = require('../../../helpers');
var Media = require('../media');

StoryTray.prototype.get = function () {
    var that = this;
    return new Request(that.session)
        .setMethod('GET')
        .setResource('storyTray')
        .send()
        .then(function(data) {
            var media = _.map(data.items, function(medium){
                return new Media(that.session, medium);
            });
            return media;    
        });
};