var _ = require('underscore');
var NodeCache = require('node-cache');
var Instagram = require('../../instagram/v1');

var inboxFeedCache = new NodeCache({
    stdTTL: 3 * 60 * 60 * 1000,
    checkperiod: 60 * 60 * 1000
});

var threadFeedCache = new NodeCache({
    stdTTL: 5 * 60 * 1000,
    checkperiod: 60 * 60 * 1000
});


function isThreadSame(thread, nodeCache) {
    var cache = nodeCache.get(thread.id)
    if(!cache) {
        nodeCache.set(thread.id, thread.params);
        return true;
    }
    var areSame = JSON.stringify(thread.params) === JSON.stringify(cache);
    if(!areSame) nodeCache.set(thread.id, thread.params);
    return areSame;
}


exports.index = function (req, res, next) {
    new Instagram.Feed.Inbox(req.exploit.session, req.query.limit)
        .all()
        .then(function (threads) {
            res.json(_.pluck(threads, 'params'))
        })
        .catch(next)
};


exports.indexPending = function (req, res, next) {
    new Instagram.Feed.InboxPending(req.exploit.session, req.query.limit)
        .get()
        .then(function (threads) {
            res.json(_.pluck(threads, 'params'))
        })
        .catch(next)
};


exports.approveAll = function (req, res, next) {
    Instagram.Thread.approveAll(req.exploit.session)
        .then(function () {
            res.json({});
        })
        .catch(next)
};


exports.show = function (req, res, next) {
    new Instagram.Feed.Thread(req.exploit.session, req.params.id, req.query.limit || 10)
        .all()
        .spread(function (items, thread) {
            var params = thread.params;
            var items = _.sortBy(items, function (item) {
                return -item.params.created;
            })
            params.items = _.pluck(items, 'params').reverse();
            res.json(params);
        })
        .catch(next)
};



exports.approve = function (req, res, next) {
    Instagram.Thread.getById(req.exploit.session, req.params.id)
        .then(function (thread) {
            return [thread.approve(), thread];
        })
        .spread(function (statuses, threads) {
            res.json({});
        })
        .catch(next)
};


exports.seen = function (req, res, next) {
    Instagram.Thread.getById(req.exploit.session, req.params.id)
        .then(function (thread) {
            return thread.seen();
        })
        .then(function (status) {
            res.json({});
        })
        .catch(next)
};


exports.hide = function (req, res, next) {
    Instagram.Thread.getById(req.exploit.session, req.params.id)
        .then(function (thread) {
            return [thread.hide(), thread];
        })
        .spread(function (status, thread) {
            res.json({});
        })
        .catch(next)
};


exports.configureText = function (req, res, next) {
    Instagram.Thread.configureText(req.exploit.session, req.body.recipients, req.body.text)
        .then(function (threads) {
            res.json(_.pluck(threads, 'params'))
        })
        .catch(next)
};


exports.configureMediaShare = function (req, res, next) {
    Instagram.Thread.configureMediaShare(req.exploit.session, req.body.recipients, req.body.mediaId, req.body.text)
        .then(function (threads) {
            res.json(_.pluck(threads, 'params'))
        })
        .catch(next)
};


exports.configureProfile = function (req, res, next) {
    Instagram.Thread.configureProfile(req.exploit.session, req.body.recipients, req.body.profileId, 
        !!req.body.simpleFormat, req.body.text)
        .then(function (threads) {
            res.json(_.pluck(threads, 'params'))
        })
        .catch(next)
};

exports.configureHashtag = function (req, res, next) {
    Instagram.Thread.configureHashtag(req.exploit.session, req.body.recipients, req.body.hashtag, 
        !!req.body.simpleFormat, req.body.text)
        .then(function (threads) {
            res.json(_.pluck(threads, 'params'))
        })
        .catch(next)
};


exports.broadcastText = function (req, res, next) {
    Instagram.Thread.getById(req.exploit.session, req.body.id)
        .then(function (thread) {
            return thread.broadcastText(req.body.text);
        })
        .then(function (threads) {
            res.json(_.pluck(threads, 'params'))
        })
        .catch(next)
};


exports.broadcastMediaShare = function (req, res, next) {
    Instagram.Thread.getById(req.exploit.session, req.body.id)
        .then(function (thread) {
            return thread.broadcastMediaShare(req.body.mediaId, req.body.text);
        })
        .then(function (threads) {
            res.json(_.pluck(threads, 'params'))
        })
        .catch(next)
};


exports.broadcastProfile = function (req, res, next) {
    Instagram.Thread.getById(req.exploit.session, req.body.id)
        .then(function (thread) {
            return thread.broadcastProfile(req.body.profileId, !!req.body.simpleFormat, req.body.text);
        })
        .then(function (threads) {
            res.json(_.pluck(threads, 'params'))
        })
        .catch(next)
};


exports.broadcastHashtag = function (req, res, next) {
    Instagram.Thread.getById(req.exploit.session, req.body.id)
        .then(function (thread) {
            return thread.broadcastHashtag(req.body.hashtag, !!req.body.simpleFormat, req.body.text);
        })
        .then(function (threads) {
            res.json(_.pluck(threads, 'params'))
        })
        .catch(next)
};


exports.inboxWatch = function (socket) {
    var session = socket.exploit.session;
    var enabled = true;
    function update() {
        if(!enabled) return;
        new Instagram.Feed.Inbox(session, 20000)
            .all()
            .then(function (threads) {
                _.each(threads, function (thread) {
                    if(isThreadSame(thread, inboxFeedCache)) return; 
                    socket.emit('update', thread.params); 
                });
            })
            .then(update)
            .catch(function (error) {
                socket.error(error);
                socket.close();
            })
    }
    update();
    socket.on('disconnect', function() {
        enabled = false;
    });
};


exports.threadWatch = function (socket) {
    var session = socket.exploit.session;
    var id = socket.handshake.query.id;
    var enabled = true;
    function update() {
        if(!enabled) return;
        Instagram.Thread.getById(session, id)
            .then(function (thread) {
                if(isThreadSame(thread, threadFeedCache)) return; 
                socket.emit('update', thread.params); 
            })
            .delay(1000)
            .then(update)
            .catch(function (error) {
                socket.error(error);
                socket.close();
            })
    }
    update();
    socket.on('disconnect', function() {
        enabled = false;
    });
};


exports.threadWatchValidation = function (socket, next) {
    if(!_.isNaN(parseInt(socket.handshake.query.id))) {
        next();
    } else {
        next(new Instagram.Exceptions.InvalidParamsError([
            { "param": "id", "msg": "Id is not valid id" }
        ]))
    }
}


exports.validateMediaShare = function (req, res, next) {
    req.checkBody('mediaId', 'MediaId must be valid id of instagram media').notEmpty();
    var errors = req.validationErrors();
    if (!errors && !/^(\d)*_(\d)*$/.test(req.body.mediaId.toString())) {
        errors = [{ "param": "mediaId", "msg": "MediaId is not valid id" }];
    }
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};


exports.validateRecipients = function (req, res, next) {
    var recipients = req.body.recipients, errors;
    if (_.isNumber(recipients) || _.isString(recipients))
        recipients = req.body.recipients = [req.body.recipients];
    if (!_.isArray(recipients)) {
        errors = [{ "param": "recipients", "msg": "Recipients must be a string or an array" }];
    }
    var valid = !_.contains(_.map(recipients, function (recipient) {
        return !_.isNaN(parseInt(recipient)) && recipient.toString().length > 4
    }), false);
    if (!valid)
        errors = [{ "param": "recipients", "msg": "Recipients must be integers and must be at least 4 characters long" }];
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};

exports.validateText = function (req, res, next) {
    req.checkBody('text', 'Text is invalid').notEmpty();
    var errors = req.validationErrors();
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};

exports.validateHashtag = function (req, res, next) {
    req.checkBody('hashtag', 'Hashtag is invalid').notEmpty().isAlpha();
    var errors = req.validationErrors();
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};

exports.validateProfile = function (req, res, next) {
    if(!_.isNumber(req.body.profileId))
        req.checkBody('profileId', 'Profile id is invalid').notEmpty().isNumeric();
    var errors = req.validationErrors();
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};


exports.showValidation = function (req, res, next) {
    if (req.params.id == 'all') return next();
    if(!_.isNumber(req.params.id))
        req.checkParams('id', 'Invalid thread id').notEmpty().isNumeric();
    var errors = req.validationErrors();
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};


exports.threadIdBodyValidation = function (req, res, next) {
    if(!_.isNumber(req.body.id))
        req.checkBody('id', 'Invalid thread id').notEmpty().isNumeric();
    var errors = req.validationErrors();
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};

exports.validateThreadTextBroadcast = function (req, res, next) {
    req.checkBody('text', 'Text must be a valid non empty string').notEmpty();
    var errors = req.validationErrors();
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};