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
    registration: 'accounts/create/',
    uploadPhoto: 'upload/photo/',
    friendshipShow: 'friendships/show/<%= id %>/',
    friendshipShowMany: 'friendships/show_many/',
    userInfo: 'users/<%= id %>/info/',
    userFeed: 'feed/user/<%= id %>/?<%= maxId ? ("max_id=" + maxId + "&") : "" %>rank_token=<%= rankToken %>',
    timelineFeed: 'feed/timeline/?<%= maxId ? ("max_id=" + maxId + "&") : "" %>rank_token=<%= rankToken %>&ranked_content=true',
    tagFeed: 'feed/tag/<%= tag %>/?<%= maxId ? ("max_id=" + maxId + "&") : "" %>rank_token=<%= rankToken %>',
    selfLikedFeed: 'feed/liked/<%= maxId ? ("?max_id=" + maxId) : "" %>',
    locationFeed: 'feed/location/<%= id %>/?<%= maxId ? ("max_id=" + maxId + "&") : "" %>rank_token=<%= rankToken %>',
    followingFeed: 'friendships/<%= id %>/following/?<%= maxId ? ("max_id=" + maxId + "&") : "" %>rank_token=<%= rankToken %>',
    followersFeed: 'friendships/<%= id %>/followers/<%= maxId ? ("?max_id=" + maxId) : "" %>',
    accountsSearch: 'users/search/?is_typehead=true&q=<%= query %>&rank_token=<%= rankToken %>',
    hashtagsSearch: 'tags/search/?count=50&q=<%= query %>&rank_token=<%= rankToken %>',
    locationsSearch: 'fbsearch/places/?count=50&query=<%= encodeURIComponent(query) %>&rank_token=<%= rankToken %>',
    changeProfilePicture: 'accounts/change_profile_picture/',
    mediaConfigure: 'media/configure/',
    mediaInfo: 'media/<%= mediaId %>/info/',
    mediaDeletePhoto: 'media/<%= mediaId %>/delete/?media_type=PHOTO',
    qeSync: 'qe/sync/',
    checkEmail: 'users/check_email/',
    checkUsername: 'users/check_username/',
    usernameSuggestions: 'accounts/username_suggestions/',
    discoverAyml: 'discover/ayml/',
    inbox: 'direct_v2/inbox/<%= maxId ? ("?max_id=" + maxId) : "" %>',
    threads: 'direct_v2/threads/?user_ids=<% JSON.stringify(threads) %>',
    threadsShow: 'direct_v2/threads/<%= threadId %>/<%= maxId ? ("?max_id=" + maxId) : "" %>',
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
    megaphoneLog: 'megaphone/log/'
};


const DEVICES = {
    
    SAMSUNG_GALAXY_S2: {
        api: 21,
        release: '4.4.4',
        dpi: '240',
        resolution: '480x800',
        model: 'Samsung Galaxy S2 - 4.4.4 - API 21 - 480x800',
        manufacturer: 'Samsung',
        language: 'en_US'
    },
    
    GOOGLE_NEXUS_7: {
        api: 22,
        release: '5.1',
        dpi: '320',
        resolution: '800x1184',
        model: 'Google Nexus 7 2013 - 4.3 - API 18 - 800x1184',
        manufacturer: 'Google',
        language: 'en_US'
    },
    
    XIAOMI_ARMANI: {
        api: 18,
        release: '4.3',
        dpi: '320',
        resolution: '720x1280',
        model: 'Xiaomi; HM 1SW; armani; qcom;',
        manufacturer: 'Xiaomi',
        language: 'en_US'
    }
}

const PRIVATE_KEYS = [{
    SIG_KEY: '9b3b9e55988c954e51477da115c58ae82dcae7ac01c735b4443a3c5923cb593a',
    SIG_VERSION: '4',
    APP_VERSION: '8.0.0'
}, {
    SIG_KEY: '55e91155636eaa89ba5ed619eb4645a4daf1103f2161dbfe6fd94d5ea7716095',
    SIG_VERSION: '4',
    APP_VERSION: '8.2.0'
}];


const HOSTNAME = 'i.instagram.com';
const HOST = 'https://' + HOSTNAME + '/';
const DEFAULT_VERSION = '7.19.0';


module.exports = {
    ROUTES: ROUTES,
    HOSTNAME: HOSTNAME,
    HOST: HOST,
    API_ENDPOINT: HOST + 'api/v1/',
    DEVICES: DEVICES,
    DEFAULT_VERSION: DEFAULT_VERSION,
    EXPERIMENTS: EXPERIMENTS,
    PRIVATE_KEYS: PRIVATE_KEYS,
    instagramAgentTemplate: _.template('Instagram <%= version %> Android (<%= agent %>)')
}