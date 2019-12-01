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
  QuizStickerOptions, SliderSticker,
  SliderStickerOptions,
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
  public static hashtag(options: HashtagStickerOptions) {
    return new HashtagSticker(options);
  }

  public static mention(options: MentionStickerOptions) {
    return new MentionSticker(options);
  }

  public static location(options: LocationStickerOptions) {
    return new LocationSticker(options);
  }

  public static countdown(options: CountdownStickerOptions) {
    return new CountdownSticker(options);
  }

  public static chat(options: ChatStickerOptions) {
    return new ChatSticker(options);
  }

  public static poll(options: PollStickerOptions) {
    return new PollSticker(options);
  }

  public static question(options: QuestionStickerOptions) {
    return new QuestionSticker(options);
  }

  public static quiz(options: QuizStickerOptions) {
    return new QuizSticker(options);
  }

  public static slider(options: SliderStickerOptions) {
    return new SliderSticker(options);
  }
}
