import { Repository } from '../core/repository';
import { SUPPORTED_CAPABILITIES } from '../core/constants';
import {
  StoryRepositoryResponseRootObject,
  StoryRepositoryResponseReels,
  StoryRepositoryResponseItem,
} from '../responses/story.repository.response';
import { Reel } from '../types/story.reel';

export class StoryRepository extends Repository {
  async reelsMediaFeed(
    user_ids: Array<number | string>,
    source: string = 'feed_timeline',
  ): Promise<StoryRepositoryResponseReels> {
    const { body } = await this.client.request.send<StoryRepositoryResponseRootObject>({
      url: `/api/v1/feed/reels_media/`,
      method: 'POST',
      form: this.client.request.signPost({
        user_ids,
        source,
        _uuid: this.client.state.uuid,
        _uid: await this.client.state.extractCookieAccountId(),
        _csrftoken: this.client.state.CSRFToken,
        device_id: this.client.state.deviceId,
        supported_capabilities_new: JSON.stringify(SUPPORTED_CAPABILITIES),
      }),
    });
    return body.reels;
  }

  async markSeen(reels: Reel, module: string = 'feed_timeline'): Promise<any> {
    const { body } = await this.client.request.send<any>({
      url: `/api/v2/media/seen/`,
      method: 'POST',
      form: this.client.request.signPost({
        reels,
        container_module: module,
        reel_media_skipped: [],
        live_vods: [],
        live_vods_skipped: [],
        nuxes: [],
        nuxes_skipped: [],
        reel: 1,
        live_vod: 0,
        _uuid: this.client.state.uuid,
        _uid: await this.client.state.extractCookieAccountId(),
        _csrftoken: this.client.state.CSRFToken,
        device_id: this.client.state.deviceId,
      }),
    });
    return body;
  }

  formatReels(items: StoryRepositoryResponseItem[], sourceId: string = null) {
    const reels: Reel = {};
    const maxSeenAt: number = Math.floor(Date.now() / 1000); // Get current global UTC timestamp.
    let seenAt: number = maxSeenAt - items.length; // Start seenAt in the past.

    for (const item of items) {
      const itemTakenAt = item.taken_at;
      // Raise "seenAt" if it's somehow older than the item's "takenAt".
      // NOTE: Can only happen if you see a story instantly when posted.
      // Do not let "seenAt" exceed the current global UTC time.
      if (seenAt < itemTakenAt) {
        seenAt = itemTakenAt + 1;
      }
      if (seenAt > maxSeenAt) {
        seenAt = maxSeenAt;
      }
      // Determine the source ID for this item. This is where the item was
      // seen from, such as a UserID or a Location-StoryTray ID.
      const itemSourceId = sourceId === null ? item.user.pk : sourceId;
      // Key Format: "mediaPk_userPk_sourceId".
      // NOTE: In case of seeing stories on a user's profile, their
      // userPk is used as the sourceId, as "mediaPk_userPk_userPk".
      const reelId = `${item.id}_${itemSourceId}`;
      // Value Format: ["mediaTakenAt_seenAt"] (array with single string).
      reels[reelId] = [`${itemTakenAt}_${seenAt}`];
      // Randomly add 1-3 seconds to next seenAt timestamp, to act human.
      seenAt += 1;
    }

    return reels;
  }
}
