var NodeCache = require('node-cache');
var _ = require('underscore');


function ThreadItemsFeed(session, threadId, limit) {
    this.cursor = null;
    this.threadId = threadId;
    this.moreAvailable = null;
    this.session = session;
    this.allItems = [];
    this.limit = parseInt(limit) || null;
}

module.exports = ThreadItemsFeed;
var ThreadItem = require('../thread-item');
var Request = require('../request');
var Thread = require('../thread');


ThreadItemsFeed.prototype.setCursor= function (cursor) {
    this.cursor = cursor;
};


ThreadItemsFeed.prototype.getCursor = function () {
    return this.cursor;
};


ThreadItemsFeed.prototype.isMoreAvailable = function () {
    return !!this.moreAvailable;
};


ThreadItemsFeed.prototype.get = function () {
    var that = this;
    return new Request(this.session)
        .setMethod('GET')
        .setResource('threadsShow', {
            cursor: this.getCursor(),
            threadId: this.threadId
        })
        .send()
        .then(function (json) {
            var items = _.map(json.thread.items, function(item) {
                return new ThreadItem(that.session, item);
            })
            that.moreAvailable = json.thread.has_older;
            if(that.isMoreAvailable())
                that.setCursor(json.thread.oldest_cursor)
            return items;
        })
};


ThreadItemsFeed.prototype.all = function () {
    var that = this;
    return this.get().then(function (items) {
        that.allItems = that.allItems.concat(items);
        var exceedLimit = false;
        if (that.limit && that.allItems.length > that.limit)
            exceedLimit = true;
        if (that.moreAvailable && !exceedLimit) {
            return that.all();
        } else {
            return that.allItems;
        }
    })
};

