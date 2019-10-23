import { Repository } from '../core/repository';
import sizeOf = require('image-size');
import {
  MediaConfigureTimelineOptions,
  MediaConfigureTimelineVideoOptions,
  PostingPhotoOptions,
  PostingStoryPhotoOptions,
  PostingVideoOptions,
  PostingAlbumItem,
  PostingAlbumOptions,
  PostingAlbumPhotoItem,
  PostingAlbumVideoItem,
  PostingStoryVideoOptions,
  MediaConfigureStoryBaseOptions,
  IgResponse,
} from '../types';
import { PostingLocation, PostingStoryOptions } from '../types/posting.options';
import Bluebird = require('bluebird');
import { IgConfigureVideoError, IgResponseError, IgUploadVideoError } from '../errors';
import { UploadRepositoryVideoResponseRootObject } from '../responses';
import Chance = require('chance');

export class PublishService extends Repository {
  /**
   * Uploads a single photo to the timeline-feed
   * @param options - the options, containing caption and image-data
   */
  public async photo(options: PostingPhotoOptions) {
    const uploadedPhoto = await this.client.upload.photo({
      file: options.file,
    });
    const imageSize = await sizeOf(options.file);
    const configureOptions: MediaConfigureTimelineOptions = {
      upload_id: uploadedPhoto.upload_id,
      width: imageSize.width,
      height: imageSize.height,
      caption: options.caption,
      ...PublishService.makeLocationOptions(options.location),
    };
    if (typeof options.usertags !== 'undefined') {
      configureOptions.usertags = options.usertags;
    }
    return await this.client.media.configure(configureOptions);
  }

  /**
   * The current way of handling the 202 - Accepted; Transcode pending -error
   * @param videoInfo The video info for debugging reasons
   * @param transcodeDelayInMs The delay for instagram to transcode the video
   */
  public static catchTranscodeError(videoInfo, transcodeDelayInMs: number) {
    return error => {
      if (error.response.statusCode === 202) {
        return Bluebird.delay(transcodeDelayInMs);
      } else {
        throw new IgUploadVideoError(error.response as IgResponse<UploadRepositoryVideoResponseRootObject>, videoInfo);
      }
    };
  }

  public async video(options: PostingVideoOptions) {
    const uploadId = Date.now().toString();
    const videoInfo = PublishService.getVideoInfo(options.video);
    await Bluebird.try(() =>
      this.client.upload.video({
        video: options.video,
        uploadId,
        ...videoInfo,
      }),
    ).catch(IgResponseError, error => {
      throw new IgUploadVideoError(error.response as IgResponse<UploadRepositoryVideoResponseRootObject>, videoInfo);
    });
    await this.client.upload.photo({
      file: options.coverImage,
      uploadId: uploadId.toString(),
    });

    await Bluebird.try(() =>
      this.client.media.uploadFinish({
        upload_id: uploadId,
        source_type: '4',
        video: { length: videoInfo.duration / 1000.0 },
      }),
    ).catch(IgResponseError, PublishService.catchTranscodeError(videoInfo, options.transcodeDelay || 5000));

    const configureOptions: MediaConfigureTimelineVideoOptions = {
      upload_id: uploadId.toString(),
      caption: options.caption,
      length: videoInfo.duration / 1000.0,
      width: videoInfo.width,
      height: videoInfo.height,
      clips: [
        {
          length: videoInfo.duration / 1000.0,
          source_type: '4',
        },
      ],
      ...PublishService.makeLocationOptions(options.location),
    };

    if (typeof options.usertags !== 'undefined') {
      configureOptions.usertags = options.usertags;
    }

    return Bluebird.try(() => this.client.media.configureVideo(configureOptions)).catch(IgResponseError, error => {
      throw new IgConfigureVideoError(error.response as IgResponse<UploadRepositoryVideoResponseRootObject>, videoInfo);
    });
  }

  public async album(options: PostingAlbumOptions) {
    const isPhoto = (arg: PostingAlbumItem): arg is PostingAlbumPhotoItem =>
      (arg as PostingAlbumPhotoItem).file !== undefined;
    const isVideo = (arg: PostingAlbumItem): arg is PostingAlbumVideoItem =>
      (arg as PostingAlbumVideoItem).video !== undefined;

    for (const item of options.items) {
      if (isPhoto(item)) {
        const uploadedPhoto = await this.client.upload.photo({
          file: item.file,
          uploadId: item.uploadId,
          isSidecar: true,
        });
        const { width, height } = await sizeOf(item.file);
        item.width = width;
        item.height = height;
        item.uploadId = uploadedPhoto.upload_id;
      } else if (isVideo(item)) {
        item.videoInfo = PublishService.getVideoInfo(item.video);
        item.uploadId = Date.now().toString();
        await Bluebird.try(() =>
          this.client.upload.video({
            video: item.video,
            uploadId: item.uploadId,
            isSidecar: true,
            ...item.videoInfo,
          }),
        ).catch(IgResponseError, error => {
          throw new IgConfigureVideoError(
            error.response as IgResponse<UploadRepositoryVideoResponseRootObject>,
            item.videoInfo,
          );
        });
        await this.client.upload.photo({
          file: item.coverImage,
          uploadId: item.uploadId,
          isSidecar: true,
        });
        await Bluebird.try(() =>
          this.client.media.uploadFinish({
            upload_id: item.uploadId,
            source_type: '4',
            video: { length: item.videoInfo.duration / 1000.0 },
          }),
        ).catch(IgResponseError, PublishService.catchTranscodeError(item.videoInfo, item.transcodeDelay));
      }
    }

    return await this.client.media.configureSidecar({
      caption: options.caption,
      children_metadata: options.items.map(item => {
        if (isVideo(item)) {
          return {
            upload_id: item.uploadId,
            width: item.videoInfo.width,
            height: item.videoInfo.height,
            length: item.videoInfo.duration,
            usertags: item.usertags,
          };
        } else if (isPhoto(item)) {
          return {
            upload_id: item.uploadId,
            width: item.width,
            height: item.height,
            usertags: item.usertags,
          };
        }
      }),
      ...PublishService.makeLocationOptions(options.location),
    });
  }

  private static makeLocationOptions(location?: PostingLocation): any {
    const options: any = {};
    if (typeof location !== 'undefined') {
      const { lat, lng, external_id_source, external_id, name, address } = location;
      options.location = {
        name,
        lat,
        lng,
        address,
        external_source: external_id_source,
        external_id,
      };
      options.location[external_id_source + '_id'] = external_id;
      options.geotag_enabled = '1';
      options.media_latitude = lat.toString();
      options.media_longitude = lng.toString();
      options.posting_latitude = lat.toString();
      options.posting_longitude = lng.toString();
    }
    return options;
  }

  private async uploadAndConfigureStoryPhoto(
    options: PostingStoryPhotoOptions,
    configureOptions: MediaConfigureStoryBaseOptions,
  ) {
    const uploadId = Date.now().toString();
    const imageSize = await sizeOf(options.file);
    await this.client.upload.photo({
      file: options.file,
      uploadId,
    });
    return await this.client.media.configureToStory({
      ...configureOptions,
      upload_id: uploadId,
      width: imageSize.width,
      height: imageSize.height,
    });
  }

  private async uploadAndConfigureStoryVideo(
    options: PostingStoryVideoOptions,
    configureOptions: MediaConfigureStoryBaseOptions,
  ) {
    const uploadId = Date.now().toString();
    const videoInfo = PublishService.getVideoInfo(options.video);
    await Bluebird.try(() =>
      this.client.upload.video({
        video: options.video,
        uploadId,
        forDirectStory: configureOptions.configure_mode === '2',
        ...videoInfo,
      }),
    ).catch(IgResponseError, error => {
      throw new IgConfigureVideoError(error.response as IgResponse<UploadRepositoryVideoResponseRootObject>, videoInfo);
    });
    await this.client.upload.photo({
      file: options.coverImage,
      uploadId,
    });
    await Bluebird.try(() =>
      this.client.media.uploadFinish({
        upload_id: uploadId,
        source_type: '3',
        video: { length: videoInfo.duration / 1000.0 },
      }),
    ).catch(IgResponseError, PublishService.catchTranscodeError(videoInfo, options.transcodeDelay));
    return Bluebird.try(() =>
      this.client.media.configureToStoryVideo({
        upload_id: uploadId,
        length: videoInfo.duration / 1000.0,
        width: videoInfo.width,
        height: videoInfo.height,
        ...configureOptions,
      }),
    ).catch(IgResponseError, error => {
      throw new IgConfigureVideoError(error.response as IgResponse<UploadRepositoryVideoResponseRootObject>, videoInfo);
    });
  }

  public async story(options: PostingStoryPhotoOptions | PostingStoryVideoOptions) {
    const isPhoto = (arg: PostingStoryOptions): arg is PostingStoryPhotoOptions =>
      (arg as PostingStoryPhotoOptions).file !== undefined;

    const storyStickerIds = [];
    const configureOptions: MediaConfigureStoryBaseOptions = {
      configure_mode: '1',
    };

    const uploadAndConfigure = () =>
      isPhoto(options)
        ? this.uploadAndConfigureStoryPhoto(options, configureOptions)
        : this.uploadAndConfigureStoryVideo(options, configureOptions);

    // check for directThread => no stickers supported
    const threadIds = typeof options.threadIds !== 'undefined';
    const recipients = typeof options.recipientUsers !== 'undefined';
    if (recipients || threadIds) {
      configureOptions.configure_mode = '2';
      configureOptions.view_mode = options.viewMode;
      configureOptions.reply_type = options.replyType;
      configureOptions.client_context = new Chance().guid();
      if (recipients) {
        configureOptions.recipient_users = options.recipientUsers;
      }
      configureOptions.thread_ids = threadIds ? options.threadIds : [];
      return uploadAndConfigure();
    }

    // story goes to story-feed
    if (options.toBesties) {
      configureOptions.audience = 'besties';
    }
    // check each sticker and add them
    if (typeof options.hashtags !== 'undefined' && options.hashtags.length > 0) {
      if (typeof options.caption === 'undefined') {
        options.caption = '';
      }
      options.hashtags.forEach(hashtag => {
        if (hashtag.tag_name.includes('#')) {
          hashtag.tag_name = hashtag.tag_name.replace('#', '');
        }
        if (!options.caption.includes(hashtag.tag_name)) {
          options.caption = `${options.caption} ${hashtag.tag_name}`;
        }
      });
      configureOptions.story_hashtags = options.hashtags;
      configureOptions.mas_opt_in = 'NOT_PROMPTED';
    }
    if (typeof options.location !== 'undefined') {
      const { latitude, longitude } = options.location;
      configureOptions.geotag_enabled = '1';
      configureOptions.posting_latitude = latitude;
      configureOptions.posting_longitude = longitude;
      configureOptions.media_latitude = latitude;
      configureOptions.media_longitude = longitude;

      configureOptions.story_locations = [options.location.sticker];
      configureOptions.mas_opt_in = 'NOT_PROMPTED';
    }
    if (typeof options.mentions !== 'undefined' && options.mentions.length > 0) {
      if (typeof options.caption === 'undefined') {
        options.caption = '';
      } else {
        options.caption = options.caption.replace(' ', '+') + '+';
      }
      configureOptions.reel_mentions = options.mentions;
      configureOptions.mas_opt_in = 'NOT_PROMPTED';
    }
    if (typeof options.poll !== 'undefined') {
      configureOptions.story_polls = [options.poll];
      configureOptions.internal_features = 'polling_sticker';
      configureOptions.mas_opt_in = 'NOT_PROMPTED';
    }
    if (typeof options.slider !== 'undefined') {
      configureOptions.story_sliders = [options.slider];
      storyStickerIds.push(`emoji_slider_${options.slider.emoji}`);
    }
    if (typeof options.question !== 'undefined') {
      configureOptions.story_questions = [options.question];
      storyStickerIds.push('question_sticker_ma');
    }
    if (typeof options.countdown !== 'undefined') {
      configureOptions.story_countdowns = [options.countdown];
      storyStickerIds.push('countdown_sticker_time');
    }
    if (typeof options.media !== 'undefined') {
      configureOptions.attached_media = [options.media];
      storyStickerIds.push(`media_simple_${options.media.media_id}`);
    }
    if (typeof options.chat !== 'undefined') {
      configureOptions.story_chats = [options.chat];
      storyStickerIds.push('chat_sticker_id');
    }
    if (typeof options.quiz !== 'undefined') {
      configureOptions.story_quizs = [options.quiz];
      storyStickerIds.push('quiz_story_sticker_default');
    }
    if (typeof options.link !== 'undefined' && options.link.length > 0) {
      configureOptions.story_cta = [
        {
          links: [{ webUri: options.link }],
        },
      ];
    }

    if (storyStickerIds.length > 0) {
      configureOptions.story_sticker_ids = storyStickerIds.join(',');
    }
    return uploadAndConfigure();
  }

  /**
   * Gets duration in ms, width and height info for a video in the mp4 container
   * @param buffer Buffer, containing the video-file
   * @returns duration in ms, width and height in px
   */
  public static getVideoInfo(buffer: Buffer): { duration: number; width: number; height: number } {
    const timescale = PublishService.read32(buffer, ['moov', 'mvhd'], 12);
    const length = PublishService.read32(buffer, ['moov', 'mvhd'], 12 + 4);
    const width = PublishService.read16(buffer, ['moov', 'trak', 'stbl', 'avc1'], 24);
    const height = PublishService.read16(buffer, ['moov', 'trak', 'stbl', 'avc1'], 26);
    return {
      duration: Math.floor((length / timescale) * 1000.0),
      width,
      height,
    };
  }

  /**
   * Reads a 32bit unsigned integer from a given Buffer by walking along the keys and getting the value with the given offset
   * ref: https://gist.github.com/OllieJones/5ffb011fa3a11964154975582360391c#file-streampeek-js-L9
   * @param buffer  The buffer to read from
   * @param keys  Keys the 'walker' should pass (stopping at the last key)
   * @param offset  Offset from the ast key to read the uint32
   */
  private static read32(buffer: Buffer, keys: string[], offset: number) {
    let start = 0;
    for (const key of keys) {
      start = buffer.indexOf(Buffer.from(key), start) + key.length;
    }
    return buffer.readUInt32BE(start + offset);
  }

  /**
   * Reads a 16bit unsigned integer from a given Buffer by walking along the keys and getting the value with the given offset
   * ref: https://gist.github.com/OllieJones/5ffb011fa3a11964154975582360391c#file-streampeek-js-L25
   * @param buffer  The buffer to read from
   * @param keys  Keys the 'walker' should pass (stopping at the last key)
   * @param offset  Offset from the ast key to read the uint16
   */
  private static read16(buffer: Buffer, keys: string[], offset: number) {
    let start = 0;
    for (const key of keys) {
      start = buffer.indexOf(Buffer.from(key), start) + key.length;
    }
    return buffer.readUInt16BE(start + offset);
  }
}
