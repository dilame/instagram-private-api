var Instagram = require('../../instagram/v1');
var _ = require('underscore');


exports.create = function (req, res, next) {
    Instagram.Relationship.create(req.exploit.session, req.body.id)
        .then(function (relationship) {
            res.json(relationship.params);
        })
        .catch(next)
};


exports.destroy = function (req, res, next) {
    Instagram.Relationship.destroy(req.exploit.session, req.body.id)
        .then(function (relationship) {
            res.json(relationship.params);
        })
        .catch(next)
};


exports.show = function (req, res, next) {
    Instagram.Relationship.get(req.exploit.session, req.params.id)
        .then(function (relationship) {
            res.json(relationship.params);
        })
        .catch(next)
};


exports.showMany = function (req, res, next) {
    Instagram.Relationship.getMany(req.exploit.session, req.body.usersIds)
        .then(function (relationships) {
            res.json(_.map(relationships, function(relationship) {
                return relationship.params
            }));
        })
        .catch(next)
};


exports.createValidation = function (req, res, next) {
    if(!_.isNumber(req.body.id))
        req.checkBody('id', 'Invalid id').notEmpty().isNumeric();
    var errors = req.validationErrors();
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};


exports.validateShow = function (req, res, next) {
    if(!_.isNumber(req.params.id))
        req.checkParams('id', 'Invalid id').notEmpty().isNumeric();
    var errors = req.validationErrors();
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
};


exports.showManyValidation = function (req, res, next) {
    req.body.usersIds = _.isArray(req.body.usersIds) ? req.body.usersIds : [req.body.usersIds]; 
    var errors;
    var valid = _.map(req.body.usersIds, function (accountId) {
        return !_.isNaN(parseInt(accountId))
    })
    if(_.contains(valid, false) || _.isEmpty(valid))
        errors = [{ "param": "usersIds", "msg": "Invalid or empty user ids"}];
    if (!errors) return next();
    next(new Instagram.Exceptions.InvalidParamsError(errors));
}




