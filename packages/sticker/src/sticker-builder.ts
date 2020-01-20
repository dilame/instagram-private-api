import { plainToClass } from 'class-transformer';
import { defaults } from 'lodash';
import { Diff } from 'utility-types';
import {
  AttachmentSticker,
  ChatSticker,
  CountdownSticker,
  HashtagSticker,
  InstaSticker,
  LocationSticker,
  MentionSticker,
  PollSticker,
  QuestionSticker,
  QuizSticker,
  SliderSticker,
} from './stickers';

export type StickerConfig = any & { story_sticker_ids };

export class StickerBuilder {
  private stickers: InstaSticker[] = [];

  public add(sticker: InstaSticker): this {
    this.stickers.push(sticker);
    return this;
  }

  public build(): StickerConfig {
    const map = new Map<string, InstaSticker[]>();
    for (const sticker of this.stickers) {
      if (map.has(sticker.key)) {
        map.get(sticker.key).push(sticker);
      } else {
        map.set(sticker.key, [sticker]);
      }
    }
    const result = {};
    const ids = [];
    const additionalProperties = [];
    for (const stickers of map.values()) {
      Object.defineProperty(result, stickers[0].key, { value: JSON.stringify(stickers), enumerable: true });
      stickers.forEach(sticker => additionalProperties.push(sticker.additionalConfigureProperties));
      ids.push(stickers[0].id);
    }
    return {
      ...defaults({}, ...additionalProperties),
      ...result,
      story_sticker_ids: ids.join(','),
    };
  }

  // wrappers, so you only have to import StickerBuilder
  public static hashtag(options: Diff<HashtagSticker, InstaSticker>): HashtagSticker {
    return plainToClass(HashtagSticker, options);
  }

  public static mention(options: Diff<MentionSticker, InstaSticker>): MentionSticker {
    return plainToClass(MentionSticker, options);
  }

  /**
   * Wrapper to create a story-mention
   * @param mediaInfo - StoryItem Object with pk and a user
   * @param additional any additional options
   */
  public static mentionReel(
    mediaInfo: { pk: string; user: { pk: string | number } },
    additional: Partial<MentionSticker> = {},
  ): MentionSticker {
    return StickerBuilder.mention({
      userId: mediaInfo.user.pk.toString(),
      mediaId: mediaInfo.pk,
      displayType: 'mention_reshare',
      width: 0.7,
      height: 0.9,
      ...additional,
    });
  }

  public static location(options: Diff<LocationSticker, InstaSticker>): LocationSticker {
    return plainToClass(LocationSticker, options);
  }

  public static countdown(options: Diff<CountdownSticker, InstaSticker>): CountdownSticker {
    return plainToClass(CountdownSticker, options);
  }

  public static chat(options: Diff<ChatSticker, InstaSticker>): ChatSticker {
    return plainToClass(ChatSticker, options);
  }

  public static poll(options: Diff<PollSticker, InstaSticker>): PollSticker {
    return plainToClass(PollSticker, options);
  }

  public static question(options: Diff<QuestionSticker, InstaSticker>): QuestionSticker {
    return plainToClass(QuestionSticker, options);
  }

  public static quiz(options: Diff<QuizSticker, InstaSticker>): QuizSticker {
    return plainToClass(QuizSticker, {
      width: 0.7291667,
      height: 0.11824318 + options.options.length * 0.10304056,
      ...options,
    });
  }

  public static slider(options: Diff<SliderSticker, InstaSticker>): SliderSticker {
    return plainToClass(SliderSticker, options);
  }

  /**
   * The mediaId only contains the media pk.
   * The user id is stored in mediaOwnerId.
   * @param options
   */
  public static attachment(options: Diff<AttachmentSticker, InstaSticker>): AttachmentSticker {
    return plainToClass(AttachmentSticker, options);
  }

  public static attachmentFromMedia(
    mediaInfo: { pk: string; user: { pk: string | number } },
    additional: Partial<AttachmentSticker> = {},
  ): AttachmentSticker {
    return StickerBuilder.attachment({
      mediaId: mediaInfo.pk,
      mediaOwnerId: mediaInfo.user.pk.toString(),
      ...additional,
    });
  }
}
