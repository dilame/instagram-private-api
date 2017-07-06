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
    _.defaults(parameters, { delay: 1500 , every: 200, pause: 30000, maxErrors : 9, limit: this.limit });
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
            results = that._handleInfinityListBug(results);
            that.emit('data', results);
            var exceedLimit = false;
            
            if ( (parameters.limit && that.allResults.length > parameters.limit) || that._stopAll === true)
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

/* Instagram backend has a bug. Sometimes it response with next_max_id cursor, but actually there is no next subjects to
* request. And when we trying to get next data, we got the same as previous. And so on to infinity.
* to prevent such behaviour, we assume that every element in this.allResults must be unique.
* And if it is not - we stop collecting.
* To see this bug try to collect AccountFollowingFeed of id 1571836453 */

FeedBase.prototype._handleInfinityListBug = function(results){
    var that = this;
    this.allResultsMap = _.isObject(this.allResultsMap) ? this.allResultsMap : {};
    results.forEach( function (result) {
        that.allResultsMap[result.id] = result;
    });

    if (_.keys(this.allResultsMap).length === this.allResults.length) {
        return results;
    } else {
        this.allResults = _.values(this.allResultsMap);
        this.stop();
        return new Array(0);
    }
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

FeedBase.prototype.allSafe = function (parameters, timeout) {
    var that = this;
    return this.all(parameters).timeout(timeout || this.timeout)
        .catch(Promise.TimeoutError, function (reason) {
            that.stop();
            throw reason;
        })
};

module.exports = FeedBase;
