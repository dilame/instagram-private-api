var _ = require('underscore');
var fs = require('fs');
var Instagram = require('../../instagram/v1');

exports.photo = function(req, res, next) {
    Instagram.Images.resize(req.file.path)
        .then(function(path) {
            return Instagram.Upload.photo(req.exploit.session, path)
        })
        .then(function(account) {
            res.json(account.params)
        })
        .catch(next)
}


exports.photoValidation = function (req, res, next) {
    var allowed = ['image/jpeg', 'image/gif', 'image/png', 'image/jpg'];
    if (!req.file || !_.contains(allowed, req.file.mimetype)) {
        var errors = [{ "param": "photo", "msg": "Invalid file or type, photo must be " + allowed.join(', ') }];
        next(new Instagram.Exceptions.InvalidParamsError(errors));
    } else {
        next();
    }
}