/* tslint:disable:max-classes-per-file */
import { Repository } from '../core/repository';
import { defaults, snakeCase } from 'lodash';
import { DateTime } from 'luxon';

export class StickerService extends Repository {
  public init(): StickerFactory {
    return new StickerFactory();
  }

  // these are just as a wrapper; in the future one could make some accept one option (e.g. hashtag -> string) as a default

  public hashtag(options: HashtagStickerOptions) {
    return new HashtagSticker(options);
  }

  public mention(options: MentionStickerOptions) {
    return new MentionSticker(options);
  }

  public location(options: LocationStickerOptions) {
    return new LocationSticker(options);
  }

  public countdown(options: CountdownStickerOptions) {
    return new CountdownSticker(options);
  }

  public chat(options: ChatStickerOptions) {
    return new ChatSticker(options);
  }

  public poll(options: PollStickerOptions) {
    return new PollSticker(options);
  }

  public question(options: QuestionStickerOptions) {
    return new QuestionSticker(options);
  }

  public quiz(options: QuizStickerOptions) {
    return new QuizSticker(options);
  }

  public slider(options: SliderStickerOptions) {
    return new SliderSticker(options);
  }
}

export type StickerConfig = any & { story_sticker_ids };

export class StickerFactory {
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
}

abstract class InstaSticker {
  public width: number;
  public height: number;
  public rotation: number = 0.0;
  public x: number = 0.0;
  public y: number = 0.0;
  public z: number = 0;

  public isSticker: boolean;

  public abstract get id(): string;

  public abstract get key(): string;

  protected constructor(width: number, height: number, isSticker: boolean = true) {
    this.width = width;
    this.height = height;
    this.isSticker = isSticker;
  }

  public center(): this {
    this.x = 0.5;
    this.y = 0.5;
    return this;
  }

  public rotateDeg(deg: number): this {
    this.rotation = deg % 360.0;
    return this;
  }

  public scale(factor: number): this {
    this.width *= factor;
    this.height *= factor;
    return this;
  }

  public moveForward(layers: number = 1): this {
    this.z += layers;
    return this;
  }

  public moveBackwards(layers: number = 1): this {
    return this.moveForward(-layers);
  }

  public right(): this {
    this.x = 1.0 - this.width / 2;
    return this;
  }

  public left(): this {
    this.x = this.width / 2;
    return this;
  }

  public top(): this {
    this.y = this.height / 2;
    return this;
  }

  public bottom(): this {
    this.y = 1.0 - this.height / 2;
    return this;
  }

  protected toSnakeCase(obj: object): object {
    const result = {};
    const pairs = Object.entries(obj);
    for (const [key, value] of pairs) {
      if (Array.isArray(value)) {
        Object.defineProperty(result, snakeCase(key), { value: value.map(x => this.toSnakeCase(x)), enumerable: true });
      } else {
        Object.defineProperty(result, snakeCase(key), { value, enumerable: true });
      }
    }
    return result;
  }

  public toJSON() {
    return {
      x: this.x,
      y: this.y,
      z: this.z,
      width: this.width,
      height: this.height,
      rotation: this.rotation,
      is_sticker: this.isSticker,
    };
  }
}

interface ChatStickerOptions {
  text: string;
  startBackgroundColor?: string;
  endBackgroundColor?: string;
}

class ChatSticker extends InstaSticker {
  public options: ChatStickerOptions;

  public constructor(options: ChatStickerOptions) {
    super(0.453125, 0.1266892);
    this.options = defaults(options, {
      startBackgroundColor: '#3897f0',
      endBackgroundColor: '#27c4f5',
    });
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      has_started_chat: false,
      ...this.toSnakeCase(this.options),
    };
  }

  get id(): string {
    return 'chat_sticker_id';
  }

  get key(): string {
    return 'story_chats';
  }
}

interface CountdownStickerOptions {
  endTs: DateTime;
  text: string;
  textColor?: string;
  startBackgroundColor?: string;
  endBackgroundColor?: string;
  digitColor?: string;
  digitCardColor?: string; // with alpha
}

class CountdownSticker extends InstaSticker {
  public options: CountdownStickerOptions;

  public constructor(options: CountdownStickerOptions) {
    super(0.703125, 0.26013514);
    this.options = defaults(options, {
      textColor: '#ffffff',
      startBackgroundColor: '#ca2ee1',
      endBackgroundColor: '#5eb1ff',
      digitColor: '#7e0091',
      digitCardColor: '#ffffffcc',
    });
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      following_enabled: true,
      ...this.toSnakeCase(this.options),
      // has to be overwritten
      end_ts: Math.floor(this.options.endTs.toUTC().toSeconds()),
    };
  }

  get id(): string {
    return 'countdown_sticker_time';
  }

  get key(): string {
    return 'story_countdowns';
  }
}

interface HashtagStickerOptions {
  tagName: string;
  width?: number;
  height?: number;
}

class HashtagSticker extends InstaSticker {
  public options: HashtagStickerOptions;

  public constructor(options: HashtagStickerOptions) {
    super(options.width || 0.47, options.height || 0.11);
    delete options.width;
    delete options.height;
    this.options = options;
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      ...this.toSnakeCase(this.options),
    };
  }

  get id(): string {
    return 'hashtag_sticker_vibrant';
  }

  get key(): string {
    return 'story_hashtags';
  }
}

interface LocationStickerOptions {
  locationId: string;
  width?: number;
  height?: number;
}

class LocationSticker extends InstaSticker {
  public options: LocationStickerOptions;

  public constructor(options: LocationStickerOptions) {
    super(options.width || 0.47, options.height || 0.111);
    delete options.width;
    delete options.height;
    this.options = options;
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      ...this.toSnakeCase(this.options),
    };
  }

  get id(): string {
    return 'location_sticker_vibrant';
  }

  get key(): string {
    return 'story_locations';
  }
}

interface MentionStickerOptions {
  userId: string;
  width?: number;
  height?: number;
}

class MentionSticker extends InstaSticker {
  public options: MentionStickerOptions;

  public constructor(options: MentionStickerOptions) {
    super(options.width || 0.64, options.height || 0.125);
    delete options.width;
    delete options.height;
    this.options = options;
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      display_type: 'mention_username',
      ...this.toSnakeCase(this.options),
    };
  }

  get id(): string {
    return 'mention_sticker_vibrant';
  }

  get key(): string {
    return 'reel_mentions';
  }
}

interface PollStickerTallie {
  text: string;
  fontSize?: number;
}

interface PollStickerOptions {
  question: string;
  tallies: [PollStickerTallie, PollStickerTallie];
}

class PollSticker extends InstaSticker {
  public options: PollStickerOptions;

  public constructor(options: PollStickerOptions) {
    super(0.49934897, 0.1266892);
    this.options = options;
    // @ts-ignore
    this.options.tallies = this.options.tallies.map(t => defaults(t, { fontSize: 28.0 }));
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      viewer_vote: 0,
      viewer_can_vote: true,
      is_shared_result: false,
      finished: false,
      ...this.toSnakeCase(this.options),
    };
  }

  get id(): string {
    return 'polling_sticker_vibrant';
  }

  get key(): string {
    return 'story_polls';
  }
}

interface QuestionStickerOptions {
  question: string;
  questionType?: 'text' | 'music';
  backgroundColor?: string;
  textColor?: string;
  profilePicUrl?: string;
}

class QuestionSticker extends InstaSticker {
  public options: QuestionStickerOptions;

  public constructor(options: QuestionStickerOptions) {
    super(0.7291667, 0.28716215);
    this.options = defaults(options, {
      backgroundColor: '#ffffff',
      textColor: '#000000',
      profilePicUrl: '',
      questionType: 'text',
    });
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      viewer_can_interact: false,
      ...this.toSnakeCase(this.options),
    };
  }

  get id(): string {
    return 'question_sticker_ama';
  }

  get key(): string {
    return 'story_questions';
  }
}

interface QuizStickerOptions {
  question: string;
  options: string[];
  correctAnswer: number;
  textColor?: string;
  startBackgroundColor?: string;
  endBackgroundColor?: string;
}

class QuizSticker extends InstaSticker {
  public options: QuizStickerOptions;

  public constructor(options: QuizStickerOptions) {
    super(0.7291667, 0.11824318 + options.options.length * 0.10304056);
    this.options = defaults(options, {
      textColor: '#ffffff',
      startBackgroundColor: '#262626',
      endBackgroundColor: '#262626',
    });
    // @ts-ignore
    this.options.options = this.options.options.map(o => ({ text: o, count: 0 }));
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      viewer_can_answer: false,
      viewer_answer: -1,
      ...this.toSnakeCase(this.options),
    };
  }

  get id(): string {
    return 'quiz_story_sticker_default';
  }

  get key(): string {
    return 'story_quizs';
  }
}

interface SliderStickerOptions {
  question: string;
  emoji: string;
  backgroundColor?: string;
  textColor?: string;
}

class SliderSticker extends InstaSticker {
  public options: SliderStickerOptions;

  public constructor(options: SliderStickerOptions) {
    super(0.7291667, 0.22212838);
    this.options = defaults(options, {
      backgroundColor: '#ffffff',
      textColor: '#000000',
    });
  }

  public toJSON() {
    return {
      ...super.toJSON(),
      viewer_can_vote: false,
      slider_vote_count: 0,
      viewer_vote: -1.0,
      slider_vote_average: 0.0,
      ...this.toSnakeCase(this.options),
    };
  }

  get id(): string {
    return `emoji_slider_${this.options.emoji}`;
  }

  get key(): string {
    return 'story_sliders';
  }
}
