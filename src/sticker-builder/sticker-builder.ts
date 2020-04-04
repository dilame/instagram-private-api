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

export type StickerOptions<T extends InstaSticker> = Diff<T, InstaSticker> & Partial<InstaSticker>;

export type StickerConfig = any & { story_sticker_ids: string };

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
        map.get(sticker.key)?.push(sticker);
      } else {
        map.set(sticker.key, [sticker]);
      }
    }
    const result = {};
    const ids = [];
    const additionalProperties: any[] = [];
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
  public static hashtag(options: StickerOptions<HashtagSticker>): HashtagSticker {
    return plainToClass(HashtagSticker, options);
  }

  public static mention(options: StickerOptions<MentionSticker>): MentionSticker {
    return plainToClass(MentionSticker, options);
  }

  /**
   * Wrapper to create a story-mention
   * @param mediaInfo - StoryItem Object with pk and a user
   * @param additional any additional options
   */
  public static mentionReel(
    mediaInfo: { pk: string; user: { pk: string | number } },
    additional: Partial<StickerOptions<MentionSticker>> = {},
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

  public static location(options: StickerOptions<LocationSticker>): LocationSticker {
    return plainToClass(LocationSticker, options);
  }

  public static countdown(options: StickerOptions<CountdownSticker>): CountdownSticker {
    return plainToClass(CountdownSticker, options);
  }

  public static chat(options: StickerOptions<ChatSticker>): ChatSticker {
    return plainToClass(ChatSticker, options);
  }

  public static poll(options: StickerOptions<PollSticker>): PollSticker {
    return plainToClass(PollSticker, options);
  }

  public static question(options: StickerOptions<QuestionSticker>): QuestionSticker {
    return plainToClass(QuestionSticker, options);
  }

  public static quiz(options: StickerOptions<QuizSticker>): QuizSticker {
    return plainToClass(QuizSticker, {
      width: 0.7291667,
      height: 0.11824318 + options.options.length * 0.10304056,
      ...options,
    });
  }

  public static slider(options: StickerOptions<SliderSticker>): SliderSticker {
    return plainToClass(SliderSticker, options);
  }

  /**
   * The mediaId only contains the media pk.
   * The user id is stored in mediaOwnerId.
   * @param options
   */
  public static attachment(options: StickerOptions<AttachmentSticker>): AttachmentSticker {
    return plainToClass(AttachmentSticker, options);
  }

  public static attachmentFromMedia(
    mediaInfo: { pk: string; user: { pk: string | number } },
    additional: Partial<StickerOptions<AttachmentSticker>> = {},
  ): AttachmentSticker {
    return StickerBuilder.attachment({
      mediaId: mediaInfo.pk,
      mediaOwnerId: mediaInfo.user.pk.toString(),
      ...additional,
    });
  }
}
