
var InstagramV1 = {};

InstagramV1.CONSTANTS = require('./v1/constants');
InstagramV1.routes = require('./v1/routes');
InstagramV1.Signatures = require('./v1/signatures');
InstagramV1.Device = require('./v1/device');
InstagramV1.CookieStorage = require('./v1/cookie-storage');
InstagramV1.CookieFileStorage = require('./v1/cookie-file-storage');
InstagramV1.Exceptions = require("./v1/exceptions");
InstagramV1.prunedJson = require('./v1/json-pruned');
InstagramV1.Resource = require('./v1/resource');

InstagramV1.Request = require('./v1/request');
InstagramV1.Session = require('./v1/session');
InstagramV1.Account = require('./v1/account');
InstagramV1.Media = require('./v1/media');
InstagramV1.Comment = require('./v1/comment');
InstagramV1.Hashtag = require('./v1/hashtag');
InstagramV1.Like = require('./v1/like');
InstagramV1.Location = require('./v1/location');
InstagramV1.Relationship = require('./v1/relationship');
InstagramV1.Thread = require('./v1/thread');
InstagramV1.ThreadItem = require('./v1/thread-item');
InstagramV1.QE = require('./v1/qe');
InstagramV1.Upload = require('./v1/upload');
InstagramV1.discover = require('./v1/discover');

InstagramV1.Feed = {};
InstagramV1.Feed.AccountFollowers = require('./v1/feeds/account-followers');
InstagramV1.Feed.AccountFollowing = require('./v1/feeds/account-following');
InstagramV1.Feed.AccountSearch = require('./v1/feeds/account-search');
InstagramV1.Feed.HashtagSearch = require('./v1/feeds/hashtag-search');
InstagramV1.Feed.Inbox = require('./v1/feeds/inbox');
InstagramV1.Feed.InboxPending = require('./v1/feeds/inbox-pending');
InstagramV1.Feed.LocationMedia = require('./v1/feeds/location-media');
InstagramV1.Feed.LocationSearch = require('./v1/feeds/location-search');
InstagramV1.Feed.TagMedia = require('./v1/feeds/tag-media');
InstagramV1.Feed.Thread = require('./v1/feeds/thread');
InstagramV1.Feed.Timeline = require('./v1/feeds/timeline-feed');
InstagramV1.Feed.UserMedia = require('./v1/feeds/user-media');
InstagramV1.Feed.SelfLiked = require('./v1/feeds/self-liked');
InstagramV1.Feed.MeliaLikers = require('./v1/feeds/media-likers');
InstagramV1.Feed.MediaComments = require('./v1/feeds/media-comments');

InstagramV1.Web = {};
InstagramV1.Web.Request = require('./v1/web/web-request');
var challenge = require('./v1/web/challenge');
InstagramV1.Web.Challenge = challenge.Challenge;
InstagramV1.Web.CaptchaVerificationChallenge = challenge.CaptchaVerificationChallenge;
InstagramV1.Web.EmailVerificationChallenge = challenge.EmailVerificationChallenge;
InstagramV1.Web.PhoneVerificationChallenge = challenge.PhoneVerificationChallenge;


module.exports = InstagramV1;