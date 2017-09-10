
var InstagramV1 = {};

InstagramV1.CONSTANTS = require('./v1/constants');
InstagramV1.routes = require('./v1/routes');
InstagramV1.Signatures = require('./v1/signatures');
InstagramV1.Device = require('./v1/device');
InstagramV1.CookieStorage = require('./v1/cookie-storage');
InstagramV1.CookieFileStorage = require('./v1/cookie-file-storage');
InstagramV1.CookieMemoryStorage = require('./v1/cookie-memory-storage');
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
InstagramV1.Link = require('./v1/link');
InstagramV1.Placeholder = require('./v1/placeholder');
InstagramV1.Location = require('./v1/location');
InstagramV1.Relationship = require('./v1/relationship');
InstagramV1.Thread = require('./v1/thread');
InstagramV1.ThreadItem = require('./v1/thread-item');
InstagramV1.QE = require('./v1/qe');
InstagramV1.Upload = require('./v1/upload');
InstagramV1.discover = require('./v1/discover');
InstagramV1.Save = require('./v1/save');
InstagramV1.search = require('./v1/search');

var creator = require('./v1/account-creator');
InstagramV1.AccountCreator = creator.AccountCreator;
InstagramV1.AccountPhoneCreator = creator.AccountPhoneCreator;
InstagramV1.AccountEmailCreator = creator.AccountEmailCreator;

InstagramV1.Feed = {};
InstagramV1.Feed.AccountFollowers = require('./v1/feeds/account-followers');
InstagramV1.Feed.AccountFollowing = require('./v1/feeds/account-following');
InstagramV1.Feed.Inbox = require('./v1/feeds/inbox');
InstagramV1.Feed.InboxPending = require('./v1/feeds/inbox-pending');
InstagramV1.Feed.LocationMedia = require('./v1/feeds/location-media');
InstagramV1.Feed.TaggedMedia = require('./v1/feeds/tagged-media');
InstagramV1.Feed.TagMedia = InstagramV1.Feed.TaggedMedia; // Alias but deprecated
InstagramV1.Feed.ThreadItems = require('./v1/feeds/thread-items');
InstagramV1.Feed.Timeline = require('./v1/feeds/timeline-feed');
InstagramV1.Feed.UserMedia = require('./v1/feeds/user-media');
InstagramV1.Feed.SelfLiked = require('./v1/feeds/self-liked');
InstagramV1.Feed.MediaComments = require('./v1/feeds/media-comments');
InstagramV1.Feed.SavedMedia = require('./v1/feeds/saved-media');
InstagramV1.Feed.StoryTray = require('./v1/feeds/story-tray');
InstagramV1.Feed.UserStory = require('./v1/feeds/user-story');

InstagramV1.Web = {};
InstagramV1.Web.Request = require('./v1/web/web-request');
var challenge = require('./v1/web/challenge');
InstagramV1.Web.Challenge = challenge.Challenge;
InstagramV1.Web.NotImplementedChallenge = challenge.NotImplementedChallenge;
InstagramV1.Web.EmailVerificationChallenge = challenge.EmailVerificationChallenge;
InstagramV1.Web.PhoneVerificationChallenge = challenge.PhoneVerificationChallenge;


module.exports = InstagramV1;
