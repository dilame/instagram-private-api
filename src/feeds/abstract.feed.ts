import * as Chance from 'chance';
import * as _ from 'lodash';
import * as Bluebird from 'bluebird';
import { ParseError, RequestsLimitError } from '../core/exceptions';
import { EventEmitter } from 'events';
import { Session } from '../core/session';

export interface IBaseFeedAllOptions {
  delay: number;
  every: number;
  pause: number;
  maxErrors: number;
  limit: number;
}

export abstract class AbstractFeed<T> extends EventEmitter {
  allResults = [];
  totalCollected = 0;
  cursor = null;
  moreAvailable = null;
  iteration = 0;
  // Pause multiplier.
  parseErrorsMultiplier = 0;
  public rankToken: string;
  limit: number;
  _stopAll: boolean = false;
  public timeout: number;
  private allResultsMap: any;
  private _allResultsLentgh: number;

  protected constructor(public session: Session) {
    super();
    const chance = new Chance();
    this.rankToken = chance.guid();
  }

  abstract async get(...parameters: any[]): Promise<T[]>

  all(parameters: Partial<IBaseFeedAllOptions> = {}) {
    parameters = Object.assign({
      delay: 1500,
      every: 200,
      pause: 30000,
      maxErrors: 9,
      limit: this.limit || Infinity,
    }, parameters);
    // every N requests we take a pause
    const delay =
      this.iteration === 0 ? 0 : this.iteration % parameters.every !== 0 ? parameters.delay : parameters.pause;
    return (
      Bluebird.delay(delay)
        .then(this.get.bind(this))
        .then(results => {
          // reset pause multiplier when we can execute requests again
          this.parseErrorsMultiplier = 0;
          return results;
        })
        // If ParseError, we assume that this is 403 forbidden HTML page, caused by "Too many requests". Just take a pause and retry.
        .catch(ParseError, () => {
          // Every consecutive ParseError makes delay befor new request longer. Otherwise we will never reach the end.
          this.parseErrorsMultiplier++;
          // When delay time is beyond reasonable, throw exception.
          if (this.parseErrorsMultiplier > parameters.maxErrors) throw new RequestsLimitError();
          return Bluebird.resolve([]).delay(parameters.pause * this.parseErrorsMultiplier);
        })
        .then((response: Array<any>) => {
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
  map(item) {
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
  reduce(accumulator, response) {
    return accumulator.concat(response);
  }

  filter() {
    return true;
  }

  /* Instagram backend has a bug. Sometimes it response with next_max_id cursor, but actually there is no next subjects to
   * request. And when we trying to get next data, we got the same as previous. And so on to infinity.
   * to prevent such behaviour, we assume that every element in this.allResults must be unique.
   * And if it is not - we stop collecting.
   * To see this bug try to collect AccountFollowingFeed of id 1571836453 */

  _handleInfinityListBug(response, results) {
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
  stop() {
    this._stopAll = true;
  }

  setCursor(cursor) {
    this.cursor = cursor;
  }

  getCursor() {
    return this.cursor;
  }

  isMoreAvailable() {
    return !!this.moreAvailable;
  }

  allSafe(parameters, timeout = 10 * 60 * 1000) {
    const that = this;
    return this.all(parameters)
      .timeout(timeout || this.timeout)
      .catch(Bluebird.TimeoutError, reason => {
        that.stop();
        throw reason;
      });
  }
}
