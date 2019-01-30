var _ = require('lodash');

function StoryTray(session) {
    this.session = session;
}

module.exports = StoryTray;
var Request = require('../request');
var Helpers = require('../../../helpers');
var Media = require('../media');

StoryTray.prototype.get = function () {

    var supported_capabilities = [
        {
            name: 'SUPPORTED_SDK_VERSIONS',
            value: '9.0,10.0,11.0,12.0,13.0,14.0,15.0,16.0,17.0,18.0,19.0,20.0,21.0,22.0,23.0,24.0,25.0,26.0,27.0,28.0,29.0,30.0,31.0,32.0,33.0,34.0,35.0,36.0,37.0,38.0,39.0,40.0,41.0,42.0,43.0'
        },
        {
            name: 'FACE_TRACKER_VERSION',
            value: 10
        },
        {
            name: 'segmentation',
            value: 'segmentation_enabled'
        },
        {
            name: 'WORLD_TRACKER',
            value: 'WORLD_TRACKER_ENABLED'
        }
    ]

    return new Request(this.session)
        .setMethod('POST')
        .setResource('storyTray')
        .setBodyType('form')
        .setData({})
        .setData({
            _uuid: this.session.uuid,
            _csrftoken: this.session.CSRFToken,
            supported_capabilities_new: JSON.stringify(supported_capabilities)
        })
        .send()
        .then(function(data) {
            var media = _.map(data.items, function(medium){
                return new Media(this.session, medium);
            });
            return media;    
        });
};