import { Repository } from '../core/repository';
import { StoryServiceInput, StoryServiceSeenInputItems, StoryServiceSeenInputReels } from '../types';

export class StoryService extends Repository {
  seen(input: StoryServiceInput, sourceId: string = null) {
    let items: StoryServiceSeenInputItems[];
    if (input instanceof Array) {
      items = input;
    } else {
      items = Object.values(input).reduce(
        (accumulator, current: StoryServiceSeenInputReels) => accumulator.concat(current.items),
        [],
      );
    }
    const reels: {
      [item: string]: [string];
    } = {};
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

    return this.client.media.seen(reels);
  }
}
