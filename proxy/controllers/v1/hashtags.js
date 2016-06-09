var Instagram = require('../../instagram/v1');
var _ = require('underscore');


exports.search = function (req, res, next) {
    new Instagram.Feed.HashtagSearch(req.exploit.session, req.body.tag)
        .get()
        .then(function (hashtags) {
            res.json(_.pluck(hashtags, 'params'));
        })
        .catch(next)
};


exports.searchValidation = function (req, res, next) {
    req.checkBody('tag', 'Invalid tag').notEmpty().isAlpha();
    var errors = req.validationErrors();
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};

exports.showValidation = function (req, res, next) {
    req.checkParams('tag', 'Invalid tag').notEmpty().isAlpha();
    var errors = req.validationErrors();
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};