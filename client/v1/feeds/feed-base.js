var util = require('util');
var _ = require('underscore');
var Promise = require('bluebird');
var Exceptions = require('../exceptions');
var EventEmitter = require('events').EventEmitter;

function FeedBase(session) {
    this.session = session;
    this.allResults=[];
    this.cursor = null;
    this.moreAvailable = null;
    this.iteration = 0;
    // Pause multiplier.
    this.parseErrorsMultiplier = 0;
}
util.inherits(FeedBase, EventEmitter);

FeedBase.prototype.all = function (parameters) {
    var that = this;
    parameters = _.isObject(parameters) ? parameters : {};
    _.defaults(parameters, { delay: 1500 , every: 200, pause: 30000, maxErrors : 9 });
    // every N requests we take a pause
    var delay = this.iteration == 0 ? 0 : this.iteration%parameters.every != 0 ? parameters.delay : parameters.pause;
    return Promise.delay(delay)
        .then(this.get.bind(this))
        .then(function (results) {
            // reset pause multiplier when we can execute requests again
            that.parseErrorsMultiplier = 0;
            return results;
        })
        // If ParseError, we assume that this is 403 forbidden HTML page, caused by "Too many requests". Just take a pause and retry.
        .catch(Exceptions.ParseError, function () {
            // Every consecutive ParseError makes delay befor new request longer. Otherwise we will never reach the end.
            that.parseErrorsMultiplier++;
            // When delay time is beyond reasonable, throw exception.
            if(that.parseErrorsMultiplier > parameters.maxErrors)
                throw new Exceptions.RequestsLimitError;
            return Promise.resolve([]).delay(parameters.pause * that.parseErrorsMultiplier)
        })
        .then(function (results) {
            that.allResults = that.allResults.concat(results);
            that.emit('data', results);
            var exceedLimit = false;
            console.log(that._stopAll);
            if ( (that.limit && that.allResults.length > that.limit) || that._stopAll === true)
                exceedLimit = true;
            if (that.isMoreAvailable() && !exceedLimit) {
                that.iteration++;
                return that.all(parameters);
            } else {
                that.iteration = 0;
                return that.allResults;
            }
        })

};

// Stops collecting results with .all() method. Will wait unfinished request.
FeedBase.prototype.stop = function () {
    this._stopAll = true;
};

FeedBase.prototype.setCursor = function (cursor) {
    this.cursor = cursor;
};

FeedBase.prototype.getCursor = function () {
    return this.cursor;
};

FeedBase.prototype.isMoreAvailable = function() {
    return !!this.moreAvailable;
};

FeedBase.prototype.allSafe = function (parameters) {
    return this.all(parameters).timeout(this.timeout);
};

module.exports = FeedBase;
