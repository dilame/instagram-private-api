var fs = require('fs');
var _ = require('underscore');
var Instagram = require('../../instagram/v1');


exports.index = function (req, res, next) {
    var limit = parseInt(req.query.limit);
    limit = limit && !_.isNaN(limit) ? limit : undefined;
    var feed = new Instagram.Feed.UserMedia(req.exploit.session, req.params.id, limit);
    if (req.query.cursor)
        feed.setMaxId(req.query.cursor);
    return feed.allSafe()
        .then(function (media) {            
            res.json({
                media: _.map(media, 'params'),
                cursor: feed.getMaxId() || null,
                hasMoreAvailable: feed.isMoreAvailable()
            })
        })
        .catch(next)
};


exports.show = function (req, res, next) {
    Instagram.Media.getById(req.exploit.session, req.params.id)
        .then(function (media) {
            res.json(media.params)
        })
        .catch(next);
};


exports.create = function (req, res, next) {
    Instagram.Media.configurePhoto(req.exploit.session, req.body.uploadId, req.body.caption)
        .then(function(medium) {
            res.json(medium.params)
        })
        .catch(next)
};


exports.delete = function (req, res, next) {
    Instagram.Media.delete(req.exploit.session, req.body.id)
        .then(function() {
            res.json({})
        })
        .catch(next)
};


exports.byLocation = function (req, res, next) {
    var feed = new Instagram.Feed.LocationMedia(req.exploit.session, req.params.id);
    if (req.query.cursor)
        feed.setMaxId(req.query.cursor);
    feed.get()
        .then(function (media) {
            res.json({
                media: _.map(media, 'params'),
                cursor: feed.getMaxId() || null,
                hasMoreAvailable: feed.isMoreAvailable()
            })
        })
        .catch(next);
};


exports.byTag = function (req, res, next) {
    var feed = new Instagram.Feed.TagMedia(req.exploit.session, req.params.tag);
    if (req.query.cursor)
        feed.setMaxId(req.query.cursor);
    feed.get()
        .then(function (media) {
            res.json({
                media: _.map(media, 'params'),
                cursor: feed.getMaxId() || null,
                hasMoreAvailable: feed.isMoreAvailable()
            })
        })
        .catch(next);
};

exports.liked = function (req, res, next) {
    var feed = new Instagram.Feed.SelfLiked(req.exploit.session);
    if (req.query.cursor)
        feed.setMaxId(req.query.cursor);
    feed.get()
        .then(function (media) {
            res.json({
                media: _.map(media, 'params'),
                cursor: feed.getMaxId() || null,
                hasMoreAvailable: feed.isMoreAvailable()
            })
        })
        .catch(next);
};


function validateMediaId(mediaId) {
    return /^(\d)*_(\d)*$/.test(mediaId);
}


exports.showValidation = function (req, res, next) {
    req.checkParams('id', 'Invalid media id').notEmpty();
    var errors = req.validationErrors();
    if (!errors && !validateMediaId(req.params.id.toString())) {
        errors = [{ "param": "id", "msg": "Id (media id) is not valid id" }];
    }
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
}


exports.createValidation = function (req, res, next) {
    if(!_.isNumber(req.body.uploadId))
        req.checkBody('uploadId', 'Invalid media uploadId').notEmpty().isNumeric();
    if(!_.isString(req.body.caption))    
        req.body.caption = "";
    var errors = req.validationErrors();
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
}


exports.deleteValidation = function (req, res, next) {
    req.checkBody('id', 'Invalid media id').notEmpty();
    var errors = req.validationErrors();
    if (!errors && !validateMediaId(req.body.id.toString())) {
        errors = [{ "param": "id", "msg": "Id (media id) is not valid id" }];
    }
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
}
