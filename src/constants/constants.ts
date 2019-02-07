export import EXPERIMENTS = require('./experiments.json');
export import LOGIN_EXPERIMENTS = require('./login-experiments.json');
export import SUPPORTED_CAPABILITIES = require('./supported-capabilities.json');

export const PRIVATE_KEY = {
  SIG_KEY: '19ce5f445dbfd9d29c59dc2a78c616a7fc090a8e018b9267bc4240a30244c53b',
  SIG_VERSION: '4',
  APP_VERSION: '76.0.0.15.395',
  VERSION_CODE: '138226743',
};

export const TLD = 'instagram.com';
export const HOSTNAME = 'i.instagram.com';
export const WEB_HOSTNAME = 'www.instagram.com';
export const HOST = `https://${HOSTNAME}/`;
export const WEBHOST = `https://${WEB_HOSTNAME}/`;
export const API_ENDPOINT = `${HOST}api/v1/`;

export const HEADERS = {
  FB_ANALYTICS_APPLICATION_ID: '567067343352427',
  X_IG_Connection_Type: 'WIFI',
  X_IG_Capabilities: '3brTPw==',
};
