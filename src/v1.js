const InstagramV1 = {};

InstagramV1.CONSTANTS = require('./constants/constants');
InstagramV1.routes = require('./core/routes');
InstagramV1.Device = require('./core/devices/device').Device;
InstagramV1.CookieStorage = require('./core/cookies/cookie-storage').CookieStorage;
InstagramV1.CookieFileStorage = require('./core/cookies/cookie-file-storage').CookieFileStorage;
InstagramV1.CookieMemoryStorage = require('./core/cookies/cookie-memory-storage').CookieMemoryStorage;
InstagramV1.Exceptions = require('./core/exceptions');
InstagramV1.prunedJson = require('./v1/json-pruned');
InstagramV1.Resource = require('./v1/resource');

InstagramV1.Request = require('./core/request').Request;
InstagramV1.Session = require('./core/session').Session;
InstagramV1.Account = require('./v1/account').Account;
InstagramV1.Media = require('./v1/media').Media;
InstagramV1.Like = require('./v1/like').Like;
InstagramV1.Comment = require('./v1/comment');
InstagramV1.Hashtag = require('./v1/hashtag');
InstagramV1.Link = require('./v1/link');
InstagramV1.Placeholder = require('./v1/placeholder');
InstagramV1.Location = require('./v1/location');
InstagramV1.Relationship = require('./v1/relationship').Relationship;
InstagramV1.Thread = require('./v1/thread');
InstagramV1.ThreadItem = require('./v1/thread-item');
InstagramV1.QE = require('./v1/qe');
InstagramV1.Internal = require('./v1/internal').Internal;
InstagramV1.Upload = require('./v1/upload');
InstagramV1.discover = require('./v1/discover');
InstagramV1.Save = require('./v1/save');
InstagramV1.search = require('./v1/search');

const creator = require('./v1/account-creator');
InstagramV1.AccountCreator = creator.AccountCreator;
InstagramV1.AccountPhoneCreator = creator.AccountPhoneCreator;
InstagramV1.AccountEmailCreator = creator.AccountEmailCreator;

InstagramV1.Feed = {};
InstagramV1.Feed.AccountFollowers = require('./feeds/account-followers.feed').AccountFollowersFeed;
InstagramV1.Feed.AccountFollowing = require('./feeds/account-following.feed').AccountFollowingFeed;
InstagramV1.Feed.Inbox = require('./feeds/inbox.feed').InboxFeed;
InstagramV1.Feed.InboxPending = require('./feeds/inbox-pending.feed').InboxPendingFeed;
InstagramV1.Feed.LocationMedia = require('./feeds/location-media.feed').LocationMediaFeed;
InstagramV1.Feed.TaggedMedia = require('./feeds/tagged-media.feed').TaggedMediaFeed;
InstagramV1.Feed.TagMedia = InstagramV1.Feed.TaggedMedia; // Alias but deprecated
InstagramV1.Feed.ThreadItems = require('./feeds/thread-items.feed').ThreadItemsFeed;
InstagramV1.Feed.Timeline = require('./feeds/timeline.feed').TimelineFeed;
InstagramV1.Feed.UserMedia = require('./feeds/user-media.feed').UserMediaFeed;
InstagramV1.Feed.SelfLiked = require('./feeds/self-liked.feed').SelfLikedFeed;
InstagramV1.Feed.MediaComments = require('./feeds/media-comments.feed').MediaCommentsFeed;
InstagramV1.Feed.SavedMedia = require('./feeds/saved-media.feed').SavedMediaFeed;
InstagramV1.Feed.StoryTrayFeed = require('./feeds/story-tray.feed').StoryTrayFeed;
InstagramV1.Feed.UserStoryFeed = require('./feeds/user-story.feed').UserStoryFeed;
InstagramV1.Feed.StoryViewersFeed = require('./feeds/story-viewers.feed').StoryViewersFeed;

InstagramV1.Web = {};
InstagramV1.Web.Request = require('./core/web-request').WebRequest;
const challenge = require('./v1/challenge');
InstagramV1.Web.Challenge = challenge.Challenge;
InstagramV1.Web.NotImplementedChallenge = challenge.NotImplementedChallenge;
InstagramV1.Web.EmailVerificationChallenge = challenge.EmailVerificationChallenge;
InstagramV1.Web.PhoneVerificationChallenge = challenge.PhoneVerificationChallenge;

module.exports = InstagramV1;
