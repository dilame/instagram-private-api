import * as Chance from 'chance';

const _ = require('lodash');
const Promise = require('bluebird');
const Exceptions = require('../../exceptions');
const EventEmitter = require('events').EventEmitter;

export class BaseFeed extends EventEmitter {
  constructor (session) {
    super();
    this.session = session;
    this.allResults = [];
    this.totalCollected = 0;
    this.cursor = null;
    this.moreAvailable = null;
    this.iteration = 0;
    // Pause multiplier.
    this.parseErrorsMultiplier = 0;
    const chance = new Chance();
    this.rankToken = chance.guid();
  }

  all (parameters = {}) {
    _.defaults(parameters, {
      delay: 1500,
      every: 200,
      pause: 30000,
      maxErrors: 9,
      limit: this.limit || Infinity,
    });
    // every N requests we take a pause
    const delay =
      this.iteration === 0 ? 0 : this.iteration % parameters.every !== 0 ? parameters.delay : parameters.pause;
    return (
      Promise.delay(delay)
        .then(this.get.bind(this))
        .then(results => {
          // reset pause multiplier when we can execute requests again
          this.parseErrorsMultiplier = 0;
          return results;
        })
        // If ParseError, we assume that this is 403 forbidden HTML page, caused by "Too many requests". Just take a pause and retry.
        .catch(Exceptions.ParseError, () => {
          // Every consecutive ParseError makes delay befor new request longer. Otherwise we will never reach the end.
          this.parseErrorsMultiplier++;
          // When delay time is beyond reasonable, throw exception.
          if (this.parseErrorsMultiplier > parameters.maxErrors) throw new Exceptions.RequestsLimitError();
          return Promise.resolve([]).delay(parameters.pause * this.parseErrorsMultiplier);
        })
        .then(response => {
          const results = response.filter(this.filter).map(this.map);
          if (_.isFunction(this.reduce)) this.allResults = this.reduce(this.allResults, results);
          this.totalCollected += response.length;

          this._handleInfinityListBug(response, results);

          this.emit('data', results);
          let exceedLimit = false;

          if ((parameters.limit && this.totalCollected > parameters.limit) || this._stopAll === true)
            exceedLimit = true;

          if (this.isMoreAvailable() && !exceedLimit) {
            this.iteration++;
            return this.all(parameters);
          } else {
            this.iteration = 0;
            this.emit('end', this.allResults);
            return this.allResults;
          }
        })
    );
  }

  /* This function is designed for response realtime processing when .all method is in progress.
   * This is useful when you are collecting real large amount of data, and you have not so much RAM.
   * The return of this function will be saved in RAM  instead of original response.
   * For example, if you need only ids, you can redefine this method in your feed instance like this
   * const feed = new AccountFollowingFeed();
   * feed.map = follower => follower.id;
   * feed.all();
   * */
  map (item) {
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
  reduce (accumulator, response) {
    return accumulator.concat(response);
  }

  filter () {
    return true;
  }

  /* Instagram backend has a bug. Sometimes it response with next_max_id cursor, but actually there is no next subjects to
   * request. And when we trying to get next data, we got the same as previous. And so on to infinity.
   * to prevent such behaviour, we assume that every element in this.allResults must be unique.
   * And if it is not - we stop collecting.
   * To see this bug try to collect AccountFollowingFeed of id 1571836453 */

  _handleInfinityListBug (response, results) {
    const that = this;
    /* For RAM economy we can store only 2 last results, not all. So every 2 iterations we release memory  */
    if (this.iteration % 2 === 0) {
      this.allResultsMap = {};
      this._allResultsLentgh = 0;
    }
    this._allResultsLentgh += response.length;

    response.forEach(result => {
      that.allResultsMap[result.id] = undefined;
    });

    if (_.keys(this.allResultsMap).length !== this._allResultsLentgh) this.stop();
  }

  // Stops collecting results with .all() method. Will wait unfinished request.
  stop () {
    this._stopAll = true;
  }

  setCursor (cursor) {
    this.cursor = cursor;
  }

  getCursor () {
    return this.cursor;
  }

  isMoreAvailable () {
    return !!this.moreAvailable;
  }

  allSafe (parameters, timeout = 10 * 60 * 1000) {
    const that = this;
    return this.all(parameters)
      .timeout(timeout || this.timeout)
      .catch(Promise.TimeoutError, reason => {
        that.stop();
        throw reason;
      });
  }
}
