var Log = require('../../models/request-log');

exports.flush = function (req, res, next) {
    return req.exploit.session.getAccountId()
        .then(function(id) {
            return Log.flush(id, req.query.limit)
        })
        .then(function(logs) {
            res.json(logs);
        })
        .catch(next)
};