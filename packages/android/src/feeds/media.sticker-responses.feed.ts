import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';

import { Feed } from '@igpapi/core';
import { Expose } from 'class-transformer';

@injectable()
export class MediaStickerResponsesFeed<T = any, I = any> extends Feed<T, I> {
  name: string;
  rootName: string;
  itemName: string;

  stickerId: string;
  mediaId: string;
  @Expose()
  private maxId: string = undefined;

  constructor(private http: AndroidHttp) {
    super();
  }

  set state(response: T) {
    this.maxId = response[this.rootName].max_id;
    this.done = response[this.rootName].more_available;
  }

  items(raw): I[] {
    return raw[this.rootName][this.itemName];
  }

  async request(): Promise<T> {
    const { body } = await this.http.send({
      url: `/api/v1/media/${this.mediaId}/${this.stickerId}/${this.name}/`,
      method: 'GET',
      qs: {
        max_id: this.maxId || void 0,
      },
    });

    return body;
  }
}
