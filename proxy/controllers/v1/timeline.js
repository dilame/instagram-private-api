var Instagram = require('../../instagram/v1');
var _ = require('underscore');


exports.feed = function (req, res, next) {
    var feed = new Instagram.Feed.Timeline(req.exploit.session);
    if (req.query.cursor)
        feed.setMaxId(req.query.cursor);
    feed.get()
        .then(function (media) {
            res.json({
                media: _.map(media, 'params'),
                cursor: feed.getMaxId() || null,
                hasMoreAvailable: feed.isMoreAvailable()
            });
        })
        .catch(next)
};
