import { Feed } from '../core/feed';
import { Expose } from 'class-transformer';
import { IgAppModule } from '../types';
import * as Chance from 'chance';
import { TopicalExploreFeedResponseRootObject, TopicalExploreFeedResponseSectionalItemsItem } from '../responses';
const chance = new Chance();

export class TopicalExploreFeed extends Feed<TopicalExploreFeedResponseRootObject, TopicalExploreFeedResponseSectionalItemsItem> {
  module: IgAppModule = 'explore_popular';
  lat?: string | number;
  lng?: string | number;
  /**
   * Change this to set the category
   */
  clusterId = 'explore_all:0';
  sessionId = chance.guid({ version: 4 });

  @Expose()
  private nextMaxId: string;

  set state(body: TopicalExploreFeedResponseRootObject) {
    this.nextMaxId = body.next_max_id;
    this.moreAvailable = body.more_available;
  }

  async items(): Promise<TopicalExploreFeedResponseSectionalItemsItem[]> {
    const res = await this.request();
    return res.sectional_items;
  }

  async request(): Promise<TopicalExploreFeedResponseRootObject> {
    const { body } = await this.client.request.send({
      url: '/api/v1/discover/topical_explore/',
      method: 'GET',
      qs: {
        is_prefetch: false,
        omit_cover_media: true,
        max_id: this.nextMaxId,
        module: this.module,
        reels_configuration: 'hide_hero',
        use_sectional_payload: true,
        timezone_offset: this.client.state.timezoneOffset,
        lat: this.lat,
        lng: this.lng,
        cluster_id: this.clusterId,
        session_id: this.sessionId,
        include_fixed_destinations: true,
      },
    });
    return body;
  }
}
