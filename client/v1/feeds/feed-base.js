var util = require('util');
var _ = require('lodash');
var Promise = require('bluebird');
var Exceptions = require('../exceptions');
var EventEmitter = require('events').EventEmitter;

function FeedBase(session) {
    this.session = session;
    this.allResults=[];
    this.totalCollected = 0;
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
    var delay = this.iteration === 0 ? 0 : this.iteration%parameters.every !== 0 ? parameters.delay : parameters.pause;
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
        .then(function (response) {
            var results = response.map(that.map);
            if(_.isFunction(that.reduce))
                that.allResults = that.reduce(that.allResults, results);
            that.totalCollected += response.length;

            that._handleInfinityListBug(response, results);

            that.emit('data', results);
            var exceedLimit = false;
            
            if ( (parameters.limit && that.totalCollected > parameters.limit) || that._stopAll === true)
                exceedLimit = true;

            if (that.isMoreAvailable() && !exceedLimit) {
                that.iteration++;
                return that.all(parameters);
            } else {
                that.iteration = 0;
                that.emit('end', that.allResults);
                return that.allResults;
            }
        })

};
/* This function is designed for response realtime processing when .all method is in progress.
* This is useful when you are collecting real large amount of data, and you have not so much RAM.
* The return of this function will be saved in RAM  instead of original response.
* For example, if you need only ids, you can redefine this method in your feed instance like this
* const feed = new AccountFollowingFeed();
* feed.map = follower => follower.id;
* feed.all();
* */
FeedBase.prototype.map = function (item) {
  return item;
}
/* User can redefine this method too. For example, if user dont need to reduce responses at all, it
 * can be defined as false, or as empty function. Just for example - you need to calculate followers amount:
  const feed = new Client.Feed.AccountFollowers(session, '1571836453')
  feed.allResults = 0; // Initial value. Empty array by default.
  feed.reduce = (accumulator, chunk) => accumulator + chunk.length; // accumulator is feed.allResults
  feed.on('data', results => console.log(feed.allResults)) // here will be total amount of collected items every request.
  console.log( await feed.all() ) // here will be total amount of collected items in the end.
 * */
FeedBase.prototype.reduce = function (accumulator, response) {
    return accumulator.concat(response);
}
/* Instagram backend has a bug. Sometimes it response with next_max_id cursor, but actually there is no next subjects to
* request. And when we trying to get next data, we got the same as previous. And so on to infinity.
* to prevent such behaviour, we assume that every element in this.allResults must be unique.
* And if it is not - we stop collecting.
* To see this bug try to collect AccountFollowingFeed of id 1571836453 */

FeedBase.prototype._handleInfinityListBug = function(response, results){
    var that = this;
    /* For RAM economy we can store only 2 last results, not all. So every 2 iterations we release memory  */
    if(this.iteration % 2 === 0){
      this.allResultsMap = {};
      this._allResultsLentgh = 0;
    }
    this._allResultsLentgh += response.length;

    response.forEach( function (result) {
        that.allResultsMap[result.id] = undefined;
    });

    if (_.keys(this.allResultsMap).length !== this._allResultsLentgh)
      this.stop();
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
