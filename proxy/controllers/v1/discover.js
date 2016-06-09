var Instagram = require('../../instagram/v1');
var _ = require('underscore');


exports.discover = function (req, res, next) {
    Instagram.discover(req.exploit.session, !!req.query.isSingup)
        .then(function (discover) {
            res.json(_.map(discover, function(d) {
                d.account = d.account.params;
                return d;
            }))
        })
        .catch(next)
};
