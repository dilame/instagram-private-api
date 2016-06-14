var _ = require('underscore');

var MAPPING = {
    HOME: '',
    SESSIONS: 'sessions',
    ACCOUNTS: 'accounts',
    DISCOVER: 'discover',
    ACCOUNTS_SET_PRIVACY: 'accounts/self/set-privacy',
    ACCOUNTS_EDIT_PROFILE: 'accounts/self/edit-profile',
    ACCOUNTS_SHOW_PROFILE: 'accounts/self/show-profile',
    ACCOUNTS_PROFILE_PICTURE: 'accounts/self/profile-picture',
    ACCOUNTS_CHECK_EMAIL: 'accounts/check/email',
    ACCOUNTS_CHECK_USERNAME: 'accounts/check/username',
    ACCOUNTS_IS_ACCOUNT_ACTIVE: 'accounts/is-active',
    ACCOUNTS_FOLLOWS: 'accounts/<%= id %>/following',
    ACCOUNTS_FOLLOWS_ALL: 'accounts/<%= id %>/following/all',
    ACCOUNTS_FOLLOWS_OFFSET: 'accounts/<%= id %>/following/offset',
    ACCOUNTS_FOLLOWERS: 'accounts/<%= id %>/followers',
    ACCOUNTS_SEARCH_STRICT: 'accounts/search/strict',
    ACCOUNTS_SEARCH: 'accounts/search',
    ACCOUNTS_SHOW: 'accounts/<%= id %>',
    ACCOUNTS_SELF: 'accounts/self',
    RELATIONSHIPS_SHOW: 'relationships/<%= id %>',
    RELATIONSHIPS_SHOW_MANY: 'relationships/many',
    RELATIONSHIPS: 'relationships',
    MEDIA: 'media',
    MEDIA_LIKED: 'media/liked',
    MEDIA_FOR_USER: 'accounts/<%= id %>/media',
    MEDIA_SHOW: 'media/<%= id %>',
    MEDIA_FOR_TAG: 'hashtags/<%= tag %>/media',
    MEDIA_FOR_LOCATION: 'locations/<%= id %>/media',
    UPLOAD_PHOTO: 'upload/photo',
    COMMENTS_FOR_MEDIUM: 'media/<%= id %>/comments',
    LIKES_FOR_MEDIUM: 'media/<%= id %>/likes',
    HASHTAGS_SEARCH: 'hashtags/search',
    LOCATIONS_SEARCH: 'locations/search',
    THREADS: 'threads',
    THREADS_PENDING: 'threads/pending',
    THREADS_APPROVE_ALL: 'threads/approve-all',
    THREADS_SHOW: 'threads/<%= id %>',
    THREADS_SEEN: 'threads/<%= id %>/seen',
    THREADS_HIDE: 'threads/<%= id %>/hide',
    THREADS_APPROVE: 'threads/<%= id %>/approve',
    THREADS_CONFIGURE_TEXT: 'threads/configure/text',
    THREADS_CONFIGURE_MEDIA_SHARE: 'threads/configure/media-share',
    THREADS_CONFIGURE_PROFILE: 'threads/configure/profile',
    THREADS_CONFIGURE_HASHTAG: 'threads/configure/hashtag',
    THREADS_BROADCAST_TEXT: 'threads/broadcast/text',
    THREADS_BROADCAST_MEDIA_SHARE: 'threads/broadcast/media-share',
    THREADS_BROADCAST_PROFILE: 'threads/broadcast/profile',
    THREADS_BROADCAST_HASHTAG: 'threads/broadcast/hashtag',
    LOGS_FLUSH: 'logs/flush',
};

var URL = {};
var PROTOCOL = 'http://';
var API_VERSION = 'v1';


_.each(MAPPING, function (val, key) {
  MAPPING[key] = _.template(val);
  URL[key] = key;
});

exports.URL = URL;
exports.getUrl = function (server, cons, data) {
  if(!cons || !MAPPING[cons.toUpperCase()])
    throw new Error("Mapping for key " + cons + " not exists");
  var url = MAPPING[cons.toUpperCase()](data);
  return PROTOCOL + server.address() + '/' + API_VERSION + '/' + url;
};





