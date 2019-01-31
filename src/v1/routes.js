const CONSTANTS = require('./constants');
const _ = require('lodash');

const URLs = {};
_.each(CONSTANTS.ROUTES, (val, key) => {
  URLs[key] = _.template(val);
});

const WEB_URLs = {};
_.each(CONSTANTS.WEB_ROUTES, (val, key) => {
  WEB_URLs[key] = _.template(val);
});

exports.getUrl = (key, data) => {
  if (!_.isFunction(URLs[key]))
    throw new Error(`Url with key \`${key}\` is not available`);
  return CONSTANTS.API_ENDPOINT + URLs[key](data || {});
};

exports.getWebUrl = (key, data) => {
  if (!_.isFunction(WEB_URLs[key]))
    throw new Error(`Web url with key \`${key}\` is not available`);
  return CONSTANTS.WEBHOST + WEB_URLs[key](data || {});
};
