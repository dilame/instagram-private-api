import { plainToClass } from 'class-transformer';
import { User } from '../models/user';

const _ = require('lodash');
const Resource = require('./resource');
const camelKeys = require('camelcase-keys');
const Media = require('./media').Media;
const Location = require('./location');
const Link = require('./link');
const Placeholder = require('./placeholder');
const Hashtag = require('./hashtag');

class ThreadItem extends Resource {
  parseParams (json) {
    const hash = camelKeys(json);
    hash.id = json.item_id || json.id;
    hash.type = json.item_type;

    if (hash.type === 'link') {
      hash.link = 'link';
      this.link = new Link(this.session, json.link);
    }

    if (hash.type === 'placeholder') {
      hash.placeholder = 'placeholder';
      this.placeholder = new Placeholder(this.session, json.placeholder);
    }
    if (hash.type === 'text') {
      hash.text = json.text;
    }
    if (hash.type === 'media') {
      hash.media = json.media.image_versions2.candidates;
    }
    if (hash.type === 'media_share') {
      hash.type = 'mediaShare';
      this.mediaShare = new Media(this.session, json.media_share);
    }
    if (hash.type === 'action_log') {
      hash.type = 'actionLog';
      hash.actionLog = json.action_log;
    }
    if (hash.type === 'profile') {
      this.profile = plainToClass(User, json.profile);
      hash.profileMediaPreview = _.map(json.preview_medias || [], medium => ({
        id: medium.id.toString(),
        images: medium.image_versions2.candidates,
      }));
    }
    // @Todo media preview just like profile for location and hashtag
    if (hash.type === 'location') {
      const location = json.location;
      location.location = Object.create(json.location);
      location.title = location.name;
      location.subtitle = null;
      this.location = new Location(this.session, location);
    }
    if (hash.type === 'hashtag') {
      this.hashtag = new Hashtag(this.session, json.hashtag);
    }
    hash.accountId = json.user_id;
    hash.created = parseInt(json.timestamp / 1000);
    return hash;
  }

  getParams () {
    const params = _.clone(this._params);
    if (params.type === 'link') params.link = this.link.params;
    if (params.type === 'placeholder') params.placeholder = this.placeholder.params;
    if (params.type === 'mediaShare') params.mediaShare = this.mediaShare.params;
    if (params.type === 'profile') params.profile = this.profile.params;
    if (params.type === 'location') params.location = this.location.params;
    if (params.type === 'hashtag') params.hashtag = this.hashtag.params;
    return params;
  }
}

module.exports = ThreadItem;
