const Promise = require('bluebird');
const { V1: InstagramV1, Device } = require('instagram-private-api');
const CookieJar = require('tough-cookie').CookieJar;
const url = require('url');
const _ = require('lodash');

module.exports = function(credentials) {
  return new Promise(function(resolve, reject) {
    const device = new Device(credentials.username);
    const storage = new InstagramV1.CookieMemoryStorage();
    const session = new InstagramV1.Session(device, storage);
    /* if proxy options passed in */
    if (!_.isEmpty(credentials.proxy)) {
      proxy = _.isObject(credentials.proxy) ? url.format(credentials.proxy) : credentials.proxy;
    }
    if (proxy) session.setProxy(proxy);
    Promise.fromCallback(CookieJar.deserialize.bind(CookieJar, credentials.cookies, storage.store))
      .then(function(jar) {
        session.jar._jar = jar;
        resolve(session);
      })
      .catch(reject);
  });
};
