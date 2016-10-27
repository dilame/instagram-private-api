var _ = require('underscore');
const EXPERIMENTS = require('./experiments.json')

const ROUTES = {
    follow: 'friendships/create/<%= id %>/',
    unfollow: 'friendships/destroy/<%= id %>/',
    expose: 'qe/expose/',
    login: 'accounts/login/',
    logout: 'accounts/logout/',
    setAccountPrivate: 'accounts/set_private/',
    setAccountPublic: 'accounts/set_public/',
    editAccount: 'accounts/edit_profile/',
    currentAccount: 'accounts/current_user/?edit=true',
    comment: 'media/<%= id %>/comment/',
    like: 'media/<%= id %>/like/',
    unlike: 'media/<%= id %>/unlike/',
    registrationCreate: 'accounts/create/',
    registrationCreateValidated: 'accounts/create_validated/',
    registrationSMSCode: 'accounts/send_signup_sms_code/',
    registrationValidateSMSCode: 'accounts/validate_signup_sms_code/',
    checkEmail: 'users/check_email/',
    checkUsername: 'users/check_username/',
    usernameSuggestions: 'accounts/username_suggestions/',
    uploadPhoto: 'upload/photo/',
    friendshipShow: 'friendships/show/<%= id %>/',
    friendshipShowMany: 'friendships/show_many/',
    userInfo: 'users/<%= id %>/info/',
    userFeed: 'feed/user/<%= id %>/?<%= maxId ? ("max_id=" + maxId + "&") : "" %>rank_token=<%= rankToken %>',
    userFollowers: 'friendships/<%= id %>/followers/?<%= rankToken ? ("rank_token=" + rankToken) : "" %><%= maxId ? ("max_id=" + maxId) : "" %>',
    userFollowings: 'friendships/<%= id %>/following/?<%= rankToken ? ("rank_token=" + rankToken) : "" %><%= maxId ? ("max_id=" + maxId) : "" %>',
    timelineFeed: 'feed/timeline/?<%= maxId ? ("max_id=" + maxId + "&") : "" %>rank_token=<%= rankToken %>&ranked_content=true',
    tagFeed: 'feed/tag/<%= encodeURI(tag) %>/?<%= maxId ? ("max_id=" + maxId + "&") : "" %>rank_token=<%= rankToken %>',
    selfLikedFeed: 'feed/liked/<%= maxId ? ("?max_id=" + maxId) : "" %>',
    locationFeed: 'feed/location/<%= id %>/?<%= maxId ? ("max_id=" + maxId + "&") : "" %>rank_token=<%= rankToken %>',
    followingFeed: 'friendships/<%= id %>/following/?<%= maxId ? ("max_id=" + maxId + "&") : "" %>rank_token=<%= rankToken %>',
    followersFeed: 'friendships/<%= id %>/followers/<%= maxId ? ("?max_id=" + maxId) : "" %>',
    accountsSearch: 'users/search/?is_typehead=true&q=<%= encodeURIComponent(query) %>&rank_token=<%= rankToken %>',
    hashtagsSearch: 'tags/search/?count=50&q=<%= encodeURIComponent(query) %>&rank_token=<%= rankToken %>',
    locationsSearch: 'fbsearch/places/?count=50&query=<%= encodeURIComponent(query) %>&rank_token=<%= rankToken %>',
    changeProfilePicture: 'accounts/change_profile_picture/',
    mediaConfigure: 'media/configure/',
    mediaInfo: 'media/<%= mediaId %>/info/',
    mediaLikes: 'media/<%= mediaId %>/likers/',
    mediaComments: 'media/<%= mediaId %>/comments/<%= maxId ? ("?max_id=" + maxId) : "" %>',
    mediaDeletePhoto: 'media/<%= mediaId %>/delete/?media_type=PHOTO',
    qeSync: 'qe/sync/',
    discoverAyml: 'discover/ayml/',
    inbox: 'direct_v2/inbox/<%= cursor ? ("?cursor=" + cursor) : "" %>',
    threads: 'direct_v2/threads/?user_ids=<% JSON.stringify(threads) %>',
    threadsShow: 'direct_v2/threads/<%= threadId %>/<%= cursor ? ("?cursor=" + cursor) : "" %>',
    threadsSeen: 'direct_v2/threads/<%= threadId %>/items/<%= itemId %>/seen/',
    threadsApprove: 'direct_v2/threads/<%= threadId %>/approve/',
    threadsHide: 'direct_v2/threads/<%= threadId %>/hide/',
    threadsPending: 'direct_v2/pending_inbox/<%= maxId ? ("?max_id=" + maxId) : "" %>',
    threadsBrodcastText: 'direct_v2/threads/broadcast/text/',
    threadsBrodcastShare: 'direct_v2/threads/broadcast/media_share/?media_type=photo',
    threadsBrodcastProfile: 'direct_v2/threads/broadcast/profile/',
    threadsBrodcastHashtag: 'direct_v2/threads/broadcast/hashtag/',
    threadsBrodcastPhoto: 'direct_v2/threads/broadcast/configure_photo/',
    threadsApproveAll: 'direct_v2/threads/approve_all/',
    threadsRecentRecipients: 'direct_share/recent_recipients/',
    autocompleteUserList: 'friendships/autocomplete_user_list/?version=2&followinfo=True',
    megaphoneLog: 'megaphone/log/',
    block: 'friendships/block/<%= id %>/',
    unblock: 'friendships/unblock/<%= id %>/'
};


const WEB_ROUTES = {
    challengeReset: 'challenge/reset/',
    challenge: 'challenge/',
    userInfo: '<%= id %>/'
}

const PRIVATE_KEY = {
    SIG_KEY: 'fc4720e1bf9d79463f62608c86fbddd374cc71bbfb98216b52e3f75333bd130d',
    SIG_VERSION: '4',
    APP_VERSION: '9.4.0'
}


const TLD = 'instagram.com';
const HOSTNAME = 'i.instagram.com';
const WEB_HOSTNAME = 'www.instagram.com';
const HOST = 'https://' + HOSTNAME + '/';
const WEBHOST = 'https://' + WEB_HOSTNAME + '/';


module.exports = {
    ROUTES: ROUTES,
    WEB_ROUTES: WEB_ROUTES,
    HOSTNAME: HOSTNAME,
    WEB_HOSTNAME: WEB_HOSTNAME,
    HOST: HOST,
    WEBHOST: WEBHOST,
    TLD: TLD,
    API_ENDPOINT: HOST + 'api/v1/',
    EXPERIMENTS: EXPERIMENTS,
    PRIVATE_KEY: PRIVATE_KEY,
    instagramAgentTemplate: _.template('Instagram <%= version %> Android (<%= agent %>)')
}
