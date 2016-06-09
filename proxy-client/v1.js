

var InstagramV1 = {};
InstagramV1.Account = require('./v1/account');
InstagramV1.Comment = require('./v1/comment');
InstagramV1.Exceptions = require('./v1/exceptions');
InstagramV1.Hashtag = require('./v1/hashtag');
InstagramV1.Like = require('./v1/like');
InstagramV1.Location = require('./v1/location');
InstagramV1.Log = require('./v1/log');
InstagramV1.Media = require('./v1/media');
InstagramV1.Relationship = require('./v1/relationship');
InstagramV1.Request = require('./v1/request');
InstagramV1.Resource = require('./v1/resource');
InstagramV1.routes = require('./v1/routes');
InstagramV1.Thread = require('./v1/thread');
InstagramV1.ThreadItem = require('./v1/thread-item');
InstagramV1.Server = require('./v1/server');
InstagramV1.Session = require('./v1/session');
InstagramV1.Upload = require('./v1/upload');
InstagramV1.discover = require('./v1/discover');

module.exports = InstagramV1;