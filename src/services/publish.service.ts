import { Repository } from '../core/repository';
import sizeOf = require('image-size');
import {
  MediaConfigureStoryOptions,
  MediaConfigureTimelineOptions,
  MediaConfigureTimelineVideoOptions,
  PostingPhotoOptions,
  PostingStoryOptions,
} from '../types';
import { PostingVideoOptions } from '../types/posting.video.options';
import {
  PostingAlbumItem,
  PostingAlbumOptions,
  PostingAlbumPhotoItem,
  PostingAlbumVideoItem,
} from '../types/posting.album.options';

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
    };
    if (typeof options.usertags !== 'undefined') {
      configureOptions.usertags = options.usertags;
    }
    if (typeof options.location !== 'undefined') {
      const { lat, lng, external_id_source, external_id, name, address } = options.location;
      configureOptions.location = {
        name,
        lat,
        lng,
        address,
        external_source: external_id_source,
        external_id,
      };
      configureOptions.location[external_id_source + '_id'] = external_id;
      configureOptions.geotag_enabled = '1';
      configureOptions.media_latitude = lat.toString();
      configureOptions.media_longitude = lng.toString();
      configureOptions.posting_latitude = lat.toString();
      configureOptions.posting_longitude = lng.toString();
    }
    return await this.client.media.configure(configureOptions);
  }

  public async video(options: PostingVideoOptions) {
    const uploadId = Date.now().toString();
    const videoInfo = PublishService.getVideoInfo(options.video);
    await this.client.upload.video({
      video: options.video,
      uploadId,
      ...videoInfo,
    });
    await this.client.upload.photo({
      file: options.coverImage,
      uploadId: uploadId.toString(),
    });

    const configureOptions: MediaConfigureTimelineVideoOptions = {
      upload_id: uploadId.toString(),
      length: videoInfo.duration / 1000.0,
      width: videoInfo.width,
      height: videoInfo.height,
      clips: [
        {
          length: videoInfo.duration / 1000.0,
          source_type: '4',
        },
      ],
    };

    if (typeof options.usertags !== 'undefined') {
      configureOptions.usertags = options.usertags;
    }
    if (typeof options.location !== 'undefined') {
      const { lat, lng, external_id_source, external_id, name, address } = options.location;
      configureOptions.location = {
        name,
        lat,
        lng,
        address,
        external_source: external_id_source,
        external_id,
      };
      configureOptions.location[external_id_source + '_id'] = external_id;
      configureOptions.geotag_enabled = '1';
      configureOptions.media_latitude = lat.toString();
      configureOptions.media_longitude = lng.toString();
      configureOptions.posting_latitude = lat.toString();
      configureOptions.posting_longitude = lng.toString();
    }

    return await this.client.media.configureVideo(configureOptions);
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
        await this.client.upload.video({
          video: item.video,
          uploadId: item.uploadId,
          isSidecar: true,
          ...item.videoInfo,
        });
        await this.client.upload.photo({
          file: item.coverImage,
          uploadId: item.uploadId,
          isSidecar: true,
        });
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
    });
  }

  public async story(options: PostingStoryOptions) {
    const uploadedPhoto = await this.client.upload.photo({
      file: options.file,
    });
    const imageSize = await sizeOf(options.file);
    const storyStickerIds = [];
    const configureOptions: MediaConfigureStoryOptions = {
      upload_id: uploadedPhoto.upload_id,
      width: imageSize.width,
      height: imageSize.height,
      configure_mode: 1,
    };

    // check for directThread => no stickers supported
    if (typeof options.threadIds !== 'undefined') {
      configureOptions.thread_ids = options.threadIds;
      configureOptions.configure_mode = 2;
      return await this.client.media.configureToStory(configureOptions);
    }
    if (typeof options.recipientUsers !== 'undefined') {
      configureOptions.recipient_users = options.recipientUsers;
      configureOptions.configure_mode = 2;
      return await this.client.media.configureToStory(configureOptions);
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
    return await this.client.media.configureToStory(configureOptions);
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
      duration: (length / timescale) * 1000,
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
