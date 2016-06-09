var Instagram = require('../../instagram/v1');
var _ = require('underscore');

exports.search = function (req, res, next) {
  new Instagram.Feed.LocationSearch(req.exploit.session, req.body.location)
    .get()
    .then(function (locations) {
        res.json(_.pluck(locations, 'params'))
    })
    .catch(next)
};


exports.searchValidation = function (req, res, next) {
    if(!_.isNumber(req.body.location))
        req.checkBody('location', 'Invalid location').notEmpty();
    var errors = req.validationErrors();
    if(!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};


exports.showValidation = function (req, res, next) {
    if(!_.isNumber(req.params.id))
        req.checkParams('id', 'Invalid location id').notEmpty().isNumeric();
    var errors = req.validationErrors();
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
}