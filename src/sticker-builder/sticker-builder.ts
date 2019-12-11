import {
  ChatSticker,
  ChatStickerOptions,
  CountdownSticker,
  CountdownStickerOptions,
  HashtagSticker,
  HashtagStickerOptions,
  InstaSticker,
  LocationSticker,
  LocationStickerOptions,
  MentionSticker,
  MentionStickerOptions,
  PollSticker,
  PollStickerOptions,
  QuestionSticker,
  QuestionStickerOptions,
  QuizSticker,
  QuizStickerOptions,
  SliderSticker,
  SliderStickerOptions,
} from './stickers';
import { plainToClass } from 'class-transformer';
import { defaults } from 'lodash';

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
    for (const stickers of map.values()) {
      Object.defineProperty(result, stickers[0].key, { value: JSON.stringify(stickers), enumerable: true });
      ids.push(stickers[0].id);
    }
    return {
      ...result,
      story_sticker_ids: ids.join(','),
    };
  }

  // wrappers, so you only have to import StickerBuilder
  public static hashtag(options: HashtagStickerOptions): HashtagSticker {
    return plainToClass(HashtagSticker, options);
  }

  public static mention(options: MentionStickerOptions): MentionSticker {
    return plainToClass(MentionSticker, options);
  }

  public static location(options: LocationStickerOptions): LocationSticker {
    return plainToClass(LocationSticker, options);
  }

  public static countdown(options: CountdownStickerOptions): CountdownSticker {
    // @ts-ignore
    options.endTs = Math.floor(options.endTs.toUTC().toSeconds());
    return plainToClass(CountdownSticker, options);
  }

  public static chat(options: ChatStickerOptions): ChatSticker {
    return plainToClass(ChatSticker, options);
  }

  public static poll(options: PollStickerOptions): PollSticker {
    // @ts-ignore
    options.tallies = options.tallies.map(t => defaults(t, { fontSize: 28.0 }));
    return plainToClass(PollSticker, options);
  }

  public static question(options: QuestionStickerOptions): QuestionSticker {
    return plainToClass(QuestionSticker, options);
  }

  public static quiz(options: QuizStickerOptions): QuizSticker {
    // @ts-ignore
    options.options = options.options.map(o => ({ text: o, count: 0 }));
    return plainToClass(QuizSticker, {
      width: 0.7291667,
      height: 0.11824318 + options.options.length * 0.10304056,
      ...options,
    });
  }

  public static slider(options: SliderStickerOptions): SliderSticker {
    return plainToClass(SliderSticker, options);
  }
}
