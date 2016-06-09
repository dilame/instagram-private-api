var Instagram = require('../../instagram/v1');
var _ = require('underscore');

exports.create = function (req, res, next) {
    Instagram.Like.create(req.exploit.session, req.params.id)
        .then(function (like) {
            res.json(like.params);
        })
        .catch(next)
};