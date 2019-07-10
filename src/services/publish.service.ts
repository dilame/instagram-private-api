import { Repository } from '../core/repository';
import { PostingPhotoOptions, PostingStoryOptions } from '../types/posting.photo.options';
import sizeOf = require('image-size');
import { MediaConfigureStoryOptions, MediaConfigureTimelineOptions } from '../types/media.configure.options';

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

  public async story(options: PostingStoryOptions) {
    const uploadedPhoto = await this.client.upload.photo({
      file: options.file,
    });
    const imageSize = await sizeOf(options.file);
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
      configureOptions.story_sticker_ids = `emoji_slider_${options.slider.emoji}`;
    }
    if (typeof options.question !== 'undefined') {
      configureOptions.story_questions = [options.question];
      configureOptions.story_sticker_ids = 'question_sticker_ma';
    }
    if (typeof options.countdown !== 'undefined') {
      configureOptions.story_countdowns = [options.countdown];
      configureOptions.story_sticker_ids = 'countdown_sticker_time';
    }
    if (typeof options.media !== 'undefined') {
      configureOptions.attached_media = [options.media];
      configureOptions.story_sticker_ids = `media_simple_${options.media.media_id}`;
    }
    if (typeof options.link !== 'undefined' && options.link.length > 0) {
      configureOptions.story_cta = [
        {
          links: [{ webUri: options.link }],
        },
      ];
    }

    return await this.client.media.configureToStory(configureOptions);
  }
}
