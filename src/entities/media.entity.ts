import * as request from 'request-promise';
import { Entity } from '../core/entity';
import { MediaEntityOembedResponse } from '../responses';

export class MediaEntity extends Entity {
  id: string;

  static async oembed(url: string): Promise<MediaEntityOembedResponse> {
    return request({
      url: 'https://api.instagram.com/oembed/',
      json: true,
      qs: {
        url,
      },
    });
  }

  public async getInsights(): Promise<any> {
    return this.client.ads.graphql(this.id);
  }
}
