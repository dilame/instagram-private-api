export import EXPERIMENTS = require('./experiments.json');
export import LOGIN_EXPERIMENTS = require('./login-experiments.json');
export import SUPPORTED_CAPABILITIES = require('./supported-capabilities.json');

export const APP_CREDENTIALS = {
  SIG_KEY: '19ce5f445dbfd9d29c59dc2a78c616a7fc090a8e018b9267bc4240a30244c53b',
  SIG_VERSION: '4',
  VERSION: '76.0.0.15.395',
  VERSION_CODE: '138226743',
  FB_ANALYTICS_APPLICATION_ID: '567067343352427',
  LANGUAGE: 'en_US',
};

export const TLD = 'instagram.com';
export const HOSTNAME = 'i.instagram.com';
export const WEB_HOSTNAME = 'www.instagram.com';
export const HOST = `https://${HOSTNAME}/`;
export const WEBHOST = `https://${WEB_HOSTNAME}/`;
export const API_ENDPOINT = `${HOST}api/v1/`;

export const HEADERS = {
  X_IG_Connection_Type: 'WIFI',
  X_IG_Capabilities: '3brTPw==',
};
