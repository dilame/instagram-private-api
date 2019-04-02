const fs = require('fs');
const path = require('path');
const isStream = require('is-stream');
const validUrl = require('valid-url');
const _ = require('lodash');

export class Helpers {
  static isValidUrl = validUrl.isUri;
  static emailTester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  static validateEmail (email) {
    if (!email) return false;
    if (email.length > 254) return false;
    const valid = Helpers.emailTester.test(email);
    if (!valid) return false;
    const parts = email.split('@');
    if (parts[0].length > 64) return false;
    const domainParts = parts[1].split('.');
    return !domainParts.some(part => part.length > 63);
  }

  static generateUUID () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
      .replace(/[xy]/g, c => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      })
      .toLowerCase();
  }

  static buildRankToken (accountId) { return `${accountId}_${Helpers.generateUUID()}`; }

  static pathToStream (streamOrPath) {
    const stream = _.isString(streamOrPath) ? fs.createReadStream(path.resolve(streamOrPath)) : streamOrPath;
    if (!isStream(stream)) throw new Error('Argument is not posible to convert to stream!');
    return stream;
  }

  static pathToBuffer (bufferOrPath) {
    return new Promise(resolve => {
      if (!_.isString(bufferOrPath)) {
        return callback(null, bufferOrPath);
      } else {
        fs.readFile(path.resolve(bufferOrPath), callback);
      }

      function callback (err, buffer) {
        if (err) throw err;
        if (!Buffer.isBuffer(buffer)) throw new Error('Argument is not posible to convert to buffer!');
        return resolve(buffer);
      }
    });
  }

  static extractUrl (text) {
    return text.match(
      /((?:https:\/\/)|(?:http:\/\/)|(?:www\.))?([a-zA-Z0-9\-.]+\.[a-zA-Z]{2,3}(?:\??)[a-zA-Z0-9\-._?,'\/\\+&%$#=~]+)/g,
    );
  }
}
