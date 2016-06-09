var multer  = require('multer');
var tmp = require('tmp');
var mkdirp = require('mkdirp');
var tmpDir = tmp.dirSync().name;
var config = require('./config');
mkdirp.sync(tmpDir);

// var storage = multer.memoryStorage();

var uploadMulter = multer({
    dest: tmpDir,
    limits: {fileSize: 1024 * 1024 * 10},
    rename: function (fieldname, filename) {
        return filename.replace(/\W+/g, '-').toLowerCase() + Date.now()
    }
});

var requireController = function(name) {
    return require('../controllers/' + name);
}
var home = requireController('home');
var sessions = requireController('v1/sessions');
var validateKey = sessions.processAndValidateKeyHTTP;
var validateSocketKey = sessions.processAndValidateKeySocketIO;
var accounts = requireController('v1/accounts');
var media = requireController('v1/media');
var locations = requireController('v1/locations');
var hashtags = requireController('v1/hashtags');
var relationships = requireController('v1/relationships');
var comments = requireController('v1/comments');
var likes = requireController('v1/likes');
var threads = requireController('v1/threads');
var timeline = requireController('v1/timeline');
var discover = requireController('v1/discover');
var requestLog = requireController('v1/request-log');
var upload = requireController('v1/upload');

module.exports = function (app) {
    var server = require('http').Server(app);
    var io = require('socket.io')(server);
    var socketPort = config.get().socketPort;
    server.listen(socketPort);
    console.info("Socket port listening to %s", socketPort);
    
    // Home
    app.get('/v1', home.index);

    // Credentials
    app.post('/v1/sessions', sessions.validateCreate, sessions.create);
    app.delete('/v1/sessions', sessions.prepareKeyForDestroy, validateKey, sessions.destroy);

    // Feeds & Discover
    app.get('/v1/discover', validateKey, discover.discover);
    app.get('/v1/feed/timeline', validateKey, timeline.feed);

    // Accounts 
    app.post('/v1/accounts/check/email', accounts.emailValidation, accounts.checkEmail);
    app.post('/v1/accounts/check/username', accounts.usernameValidation, accounts.checkUsername);
    app.post('/v1/accounts', accounts.createValidation, accounts.create);
    
    app.get('/v1/accounts/self', validateKey, accounts.self);
    app.post('/v1/accounts/self/set-privacy', accounts.privacyValidation , validateKey, accounts.setPrivacy);
    app.get('/v1/accounts/self/show-profile', validateKey, accounts.showProfile);
    app.post('/v1/accounts/self/edit-profile', accounts.editProfileValidation, validateKey, accounts.editProfile);
    app.post('/v1/accounts/self/profile-picture', uploadMulter.single('picture'), accounts.profilePictureValidation, validateKey, accounts.setProfilePicture);
    app.get('/v1/accounts/:id', accounts.showValidation, validateKey, accounts.show);
    app.post('/v1/accounts/search/', accounts.searchValidation, validateKey, accounts.search);
    app.post('/v1/accounts/search/strict', accounts.searchValidation, validateKey, accounts.searchSingleAccount);
    app.get('/v1/accounts/:id/followers', accounts.showValidation, validateKey, accounts.followers);
    app.get('/v1/accounts/:id/following', accounts.showValidation, validateKey, accounts.following);
    app.get('/v1/accounts/:id/following/all', accounts.showValidation, validateKey, accounts.followingAll);
    app.get('/v1/accounts/:id/following/offset', accounts.showValidation, accounts.showFollowingOffset, validateKey, accounts.followingOffset);
    app.post('/v1/accounts/is-active', accounts.isActiveValidation, validateKey, accounts.isActive);

    // Friendships - follow / unfollow
    app.get('/v1/relationships/:id', accounts.showValidation, validateKey, relationships.show);    
    app.post('/v1/relationships/many', relationships.showManyValidation, validateKey, relationships.showMany);
    app.post('/v1/relationships', relationships.createValidation, validateKey, relationships.create);
    app.delete('/v1/relationships', relationships.createValidation, validateKey, relationships.destroy);

    // Media 
    app.get('/v1/accounts/:id/media', accounts.showValidation, validateKey, media.index);
    app.get('/v1/media/:id', media.showValidation, validateKey, media.show);
    app.get('/v1/hashtags/:tag/media', hashtags.showValidation, validateKey, media.byTag);
    app.get('/v1/locations/:id/media', locations.showValidation, validateKey, media.byLocation);
    app.post('/v1/media', media.createValidation, validateKey, media.create);
    app.delete('/v1/media', media.deleteValidation, validateKey, media.delete);
    
    // Upload
    app.post('/v1/upload/photo', uploadMulter.single('picture'), upload.photoValidation, validateKey, upload.photo);

    // Comments
    app.post('/v1/media/:id/comments', media.showValidation, comments.createValidation, validateKey, comments.create);

    // Likes
    app.post('/v1/media/:id/likes', media.showValidation, validateKey, likes.create);

    // Hashtags  
    app.post('/v1/hashtags/search', hashtags.searchValidation, validateKey, hashtags.search);

    //Locations
    app.post('/v1/locations/search', locations.searchValidation, validateKey, locations.search);

    // Threads / Directs
    
    io.of('/v1/threads')
        .use(validateSocketKey)
        .on('connection', threads.inboxWatch);
        
    io.of('/v1/thread')
        .use(validateSocketKey)
        .use(threads.threadWatchValidation)
        .on('connection', threads.threadWatch);
    
    app.get('/v1/threads', validateKey, threads.index);
    app.get('/v1/threads/pending', validateKey, threads.indexPending);
    app.get('/v1/threads/approve-all', validateKey, threads.approveAll);
    app.post('/v1/threads/configure/text', threads.validateText, validateKey, threads.configureText);
    app.post('/v1/threads/configure/media-share', threads.validateMediaShare, threads.validateRecipients, validateKey, threads.configureMediaShare);
    app.post('/v1/threads/configure/profile', threads.validateProfile, threads.validateRecipients, validateKey, threads.configureProfile);
    app.post('/v1/threads/configure/hashtag', threads.validateHashtag, threads.validateRecipients, validateKey, threads.configureHashtag);
    app.post('/v1/threads/broadcast/text', threads.threadIdBodyValidation, threads.validateThreadTextBroadcast, validateKey, threads.broadcastText);
    app.post('/v1/threads/broadcast/media-share', threads.threadIdBodyValidation, threads.validateMediaShare, validateKey, threads.broadcastMediaShare);
    app.post('/v1/threads/broadcast/profile', threads.threadIdBodyValidation, threads.validateProfile, validateKey, threads.broadcastProfile);
    app.post('/v1/threads/broadcast/hashtag', threads.threadIdBodyValidation, threads.validateHashtag, validateKey, threads.broadcastHashtag);
    app.get('/v1/threads/:id', threads.showValidation, validateKey, threads.show);
    app.get('/v1/threads/:id/seen', threads.showValidation, validateKey, threads.seen);
    app.get('/v1/threads/:id/hide', validateKey, threads.hide);
    app.get('/v1/threads/:id/approve', threads.showValidation, validateKey, threads.approve);
    
    // Logs
    app.get('/v1/logs/flush', validateKey, requestLog.flush);
};
