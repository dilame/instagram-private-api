var Instagram = require('../instagram/v1');
var SessionModel = require('../models/session');

exports.index = function (req, res, next) {
    Instagram.Signatures.sign("payload")
        .then(function () {
            return SessionModel.availability()
        })
        .then(function(availability){    
            res.json({
                node: true,
                sessions: availability
            });
        })
        .catch(next)
};
