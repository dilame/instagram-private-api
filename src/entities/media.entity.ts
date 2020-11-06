import * as request from 'request-promise';
import { Entity } from '../core/entity';
import { MediaEntityOembedResponse } from '../responses';

export class MediaEntity extends Entity {
  static async oembed(url: string): Promise<MediaEntityOembedResponse> {
    return request({
      url: 'https://api.instagram.com/instagram_oembed/',
      json: true,
      qs: {
        url,
      },
    });
  }
}
