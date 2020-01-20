import * as urlRegex from 'url-regex';
import { Entity } from '../core/entity';
import {
  DirectThreadBroadcastPhotoOptions,
  DirectThreadBroadcastPhotoStoryOptions,
  DirectThreadBroadcastReelOptions,
  DirectThreadBroadcastVideoOptions,
  DirectThreadBroadcastVideoStoryOptions,
  DirectThreadBroadcastVoiceOptions,
} from '../types';
import { DirectThreadBroadcastOptions } from '../types';
import { IgClientError, IgResponseError } from '../errors';
import { PublishService } from '../services/publish.service';
import * as Bluebird from 'bluebird';

export class DirectThreadEntity extends Entity {
  threadId: string = null;
  userIds: string[] = null;

  public async deleteItem(itemId: string | number) {
    if (!this.threadId) {
      throw new IgClientError('threadId was null.');
    }
    return this.client.directThread.deleteItem(this.threadId, itemId);
  }

  public async broadcastText(text: string) {
    const urls = text.match(urlRegex({ strict: false }));
    if (urls instanceof Array) {
      return this.broadcastLink(text, urls);
    }
    return await this.broadcast({
      item: 'text',
      form: {
        text,
      },
    });
  }

  /**
   * This is used when replying to a story (swiping up) and it's creator
   * @param options
   */
  public async broadcastReel(options: DirectThreadBroadcastReelOptions) {
    return await this.broadcast({
      item: 'reel_share',
      form: {
        media_id: options.mediaId,
        reel_id: options.reelId || options.mediaId.split('_')[1],
        text: options.text,
        entry: 'reel',
      },
      qs: {
        media_type: options.mediaType || 'photo',
      },
    });
  }

  /**
   * This is used when sharing a story (app: plane/share button) to a thread
   * @param options
   */
  public async broadcastUserStory(options: DirectThreadBroadcastReelOptions) {
    return await this.broadcast({
      item: 'story_share',
      form: {
        story_media_id: options.mediaId,
        reel_id: options.reelId || options.mediaId.split('_')[1],
        text: options.text,
      },
      qs: {
        media_type: options.mediaType || 'photo',
      },
      signed: true,
    });
  }

  public async broadcastProfile(id: number | string) {
    return await this.broadcast({
      item: 'profile',
      form: {
        profile_user_id: id,
      },
    });
  }

  public async broadcastLink(link_text: string, link_urls: string[]) {
    return await this.broadcast({
      item: 'link',
      form: {
        link_text,
        link_urls: JSON.stringify(link_urls),
      },
    });
  }

  public async broadcastPhoto(options: DirectThreadBroadcastPhotoOptions) {
    const { upload_id } = await this.client.upload.photo({
      uploadId: options.uploadId,
      file: options.file,
    });
    return await this.broadcast({
      item: 'configure_photo',
      form: {
        allow_full_aspect_ratio: options.allowFullAspectRatio || true,
        upload_id,
      },
    });
  }

  public async broadcastVideo(options: DirectThreadBroadcastVideoOptions) {
    const uploadId = options.uploadId || Date.now().toString();
    const videoInfo = PublishService.getVideoInfo(options.video);
    await this.client.upload.video({
      video: options.video,
      uploadId,
      isDirect: true,
      ...videoInfo,
    });

    await Bluebird.try(() =>
      this.client.media.uploadFinish({
        upload_id: uploadId,
        source_type: '2',
        video: { length: videoInfo.duration / 1000.0 },
      }),
    ).catch(IgResponseError, PublishService.catchTranscodeError(videoInfo, options.transcodeDelay || 4 * 1000));

    return await this.broadcast({
      item: 'configure_video',
      form: {
        video_result: '',
        upload_id: uploadId,
        sampled: typeof options.sampled !== 'undefined' ? options.sampled : true,
      },
    });
  }

  public async broadcastVoice(options: DirectThreadBroadcastVoiceOptions) {
    const duration = PublishService.getMP4Duration(options.file);
    const uploadId = options.uploadId || Date.now().toString();
    await this.client.upload.video({
      duration,
      video: options.file,
      uploadId,
      isDirectVoice: true,
      mediaType: '11',
    });

    await Bluebird.try(() =>
      this.client.media.uploadFinish({
        upload_id: uploadId,
        source_type: '4',
      }),
    ).catch(IgResponseError, PublishService.catchTranscodeError({ duration }, options.transcodeDelay || 4 * 1000));

    return await this.broadcast({
      item: 'share_voice',
      form: {
        // create a nice sine wave if the waveform is not provided
        waveform: JSON.stringify(
          options.waveform || Array.from(Array(20), (_, i) => Math.sin(i * (Math.PI / 10)) * 0.5 + 0.5),
        ),
        waveform_sampling_frequency_hz: options.waveformSamplingFrequencyHz || '10',
        upload_id: uploadId,
      },
    });
  }

  /**
   * Uploads a story to the thread
   * The story is either destroyable (view 'once') or 'replayable'
   * @param input
   */
  public async broadcastStory(
    input: Buffer | DirectThreadBroadcastPhotoStoryOptions | DirectThreadBroadcastVideoStoryOptions,
  ) {
    const options = input instanceof Buffer ? { file: input } : input;
    const baseOptions = {
      ...options,
      viewMode: options.viewMode || 'replayable',
      replyType: options.replyType,
    };
    if (this.threadId !== null) {
      return await this.client.publish.story({
        ...baseOptions,
        threadIds: [this.threadId],
      });
    }
    if (this.userIds !== null) {
      return await this.client.publish.story({
        ...baseOptions,
        recipientUsers: this.userIds,
      });
    }
    throw new Error('DirectThread: No recipients set');
  }

  public async updateTitle(title: string) {
    return await this.client.directThread.updateTitle(this.threadId, title);
  }

  public async mute() {
    return await this.client.directThread.mute(this.threadId);
  }

  public async unmute() {
    return await this.client.directThread.unmute(this.threadId);
  }

  public async hide() {
    return await this.client.directThread.hide(this.threadId);
  }

  public async leave() {
    return await this.client.directThread.leave(this.threadId);
  }

  public async addUser(userIds: string[] | number[]) {
    return await this.client.directThread.addUser(this.threadId, userIds);
  }

  public async markItemSeen(threadItemId: string) {
    return await this.client.directThread.markItemSeen(this.threadId, threadItemId);
  }

  private async broadcast(options: Partial<DirectThreadBroadcastOptions>) {
    if (this.threadId === null && this.userIds === null) {
      throw new Error('DirectThread: No recipients set');
    }
    const baseParams = {
      item: options.item,
      form: options.form,
      qs: options.qs,
      signed: options.signed,
    };
    let params;
    if (this.threadId) {
      params = Object.assign(baseParams, { threadIds: this.threadId });
    } else {
      params = Object.assign(baseParams, { userIds: this.userIds });
    }
    const response = await this.client.directThread.broadcast(params);
    if (response.payload) {
      this.threadId = response.payload.thread_id;
      this.userIds = null;
      return response.payload;
    } else if (response.message_metadata) {
      const [first] = response.message_metadata;
      this.threadId = first.thread_id;
      this.userIds = null;
      return response;
    }
  }
}
