import * as request from 'request-promise';
import { MediaEntityOembedResponse } from '../responses';

export class MediaEntity {
  static async oembed(url: string): Promise<MediaEntityOembedResponse> {
    return request({
      url: 'https://api.instagram.com/oembed/',
      json: true,
      qs: {
        url,
      },
    });
  }
}
