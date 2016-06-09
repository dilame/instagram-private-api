var Instagram = require('../../instagram/v1');
var _ = require('underscore');

var MAX_COMMENT_LENGTH = 500; // todo verify...


exports.create = function (req, res, next) {
    Instagram.Comment.create(req.exploit.session, req.params.id, req.body.text)
        .then(function (comment) {
            return res.json(comment.params);
        })
        .catch(next)
};


exports.createValidation = function (req, res, next) {
    req.checkBody('text', 'Invalid text').notEmpty().len(1, MAX_COMMENT_LENGTH);
    var errors = req.validationErrors();
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};