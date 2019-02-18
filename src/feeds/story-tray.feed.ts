import { SUPPORTED_CAPABILITIES } from '../constants/constants';
import { StoryTray } from '../models/story-tray';
import { plainToClass } from 'class-transformer';
import { Request } from '../core/request';

export class StoryTrayFeed {
  constructor(private session) {
  }

  async get() {
    const { tray } = await new Request(this.session)
      .setMethod('POST')
      .setResource('storyTray')
      .setBodyType('form')
      .setData({})
      .setData({
        _uuid: this.session.uuid,
        _csrftoken: this.session.CSRFToken,
        supported_capabilities_new: JSON.stringify(SUPPORTED_CAPABILITIES),
      })
      .send();
    return plainToClass(StoryTray, tray);
  }
}
