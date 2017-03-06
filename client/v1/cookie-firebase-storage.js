var util = require("util");
var FirebaseCookieStore = require('tough-cookie-firebasestore');
var CookieStorage = require('./cookie-storage');

function CookieFirebaseStorage(app, firebasePath) {
    CookieStorage.call(this, new FirebaseCookieStore(app,firebasePath))
}

util.inherits(CookieFirebaseStorage, CookieStorage);
module.exports = CookieFirebaseStorage;
