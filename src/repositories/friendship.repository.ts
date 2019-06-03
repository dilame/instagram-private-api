import { Repository } from '../core/repository';
import { FriendshipRepositoryShowResponseRootObject, FriendshipRepositoryChangeResponseRootObject } from '../responses';

export class FriendshipRepository extends Repository {
  async show(id: string | number) {
    const { body } = await this.client.request.send<FriendshipRepositoryShowResponseRootObject>({
      url: `/api/v1/friendships/show/${id}/`,
    });
    return body;
  }

  async create(id: string | number, mediaIdAttribution?: string) {
    return this.change('create', id, mediaIdAttribution);
  }

  async destroy(id: string | number, mediaIdAttribution?: string) {
    return this.change('destroy', id, mediaIdAttribution);
  }

  async removeFriendship(id: string | number, mediaIdAttribution?: string) {
    return this.change('remove_follower', id, mediaIdAttribution);
  }

  async muteUserMedia(id: string | number, option: string, mediaIdAttribution?: string) {
    var additional = {};
    switch (option) {
      case 'story':
        additional['target_reel_author_id'] = id;
        break;
      case 'post':
        additional['target_posts_author_id'] = id;
        break;
      default:
        throw new Error('Invalid option: choose story or post');
    }
    var defaultParams = {
      _csrftoken: this.client.state.cookieCsrfToken,
      user_id: id,
      radio_type: this.client.state.radioType,
      _uid: this.client.state.cookieUserId,
      device_id: this.client.state.deviceId,
      _uuid: this.client.state.uuid,
      media_id_attribution: mediaIdAttribution,
    };
    const { body } = await this.client.request.send({
      url: `/api/v1/friendships/mute_posts_or_story_from_follow/`,
      method: 'POST',
      form: this.client.request.sign({ ...defaultParams, ...additional }),
    });
    return body.friendship_status;
  }

  async unmuteUserMedia(id: string | number, option: string, mediaIdAttribution?: string) {
    var additional = {};
    switch (option) {
      case 'story':
        additional['target_reel_author_id'] = id;
        break;
      case 'post':
        additional['target_posts_author_id'] = id;
        break;
      default:
        throw new Error('Invalid option: choose story or post');
    }
    var defaultParams = {
      _csrftoken: this.client.state.cookieCsrfToken,
      user_id: id,
      radio_type: this.client.state.radioType,
      _uid: this.client.state.cookieUserId,
      device_id: this.client.state.deviceId,
      _uuid: this.client.state.uuid,
      media_id_attribution: mediaIdAttribution,
    };
    const { body } = await this.client.request.send({
      url: `/api/v1/friendships/unmute_posts_or_story_from_follow/`,
      method: 'POST',
      form: this.client.request.sign({ ...defaultParams, ...additional }),
    });
    return body.friendship_status;
  }

  async favorite(id: string | number, mediaIdAttribution?: string) {
    return this.change('favorite', id, mediaIdAttribution);
  }

  async unfavorite(id: string | number, mediaIdAttribution?: string) {
    return this.change('unfavorite', id, mediaIdAttribution);
  }

  async block(id: string | number, mediaIdAttribution?: string) {
    return this.change('block', id, mediaIdAttribution);
  }

  async blockFromStory(id: string | number, mediaIdAttribution?: string) {
    return this.change('block_friend_reel', id, mediaIdAttribution);
  }

  async unBlockFromStory(id: string | number, mediaIdAttribution?: string) {
    return this.change('unblock_friend_reel', id, mediaIdAttribution);
  }

  async unblock(id: string | number, mediaIdAttribution?: string) {
    return this.change('unblock', id, mediaIdAttribution);
  }

  async storyNotifications(id: string | number, mediaIdAttribution?: string) {
    return this.change('favorite_for_stories', id, mediaIdAttribution);
  }

  async disableStoryNotifications(id: string | number, mediaIdAttribution?: string) {
    return this.change('unfavorite_for_stories', id, mediaIdAttribution);
  }

  async muteStory(id: string | number, mediaIdAttribution?: string) {
    return this.change('mute_friend_reel', id, mediaIdAttribution);
  }

  async unmuteStory(id: string | number, mediaIdAttribution?: string) {
    return this.change('unmute_friend_reel', id, mediaIdAttribution);
  }

  async closeFriends() {
    const { body } = await this.client.request.send({
      url: `/api/v1/friendships/besties`,
    });
    return body.friendship_status;
  }

  async suggestedCloseFriends() {
    const { body } = await this.client.request.send({
      url: `/api/v1/friendships/bestie_suggestions`,
    });
    return body.friendship_status;
  }

  async approve(id: string | number, mediaIdAttribution?: string) {
    return this.change('approve', id, mediaIdAttribution);
  }

  async deny(id: string | number, mediaIdAttribution?: string) {
    return this.change('ignore', id, mediaIdAttribution);
  }

  private async change(action: string, id: string | number, mediaIdAttribution?: string) {
    const { body } = await this.client.request.send<FriendshipRepositoryChangeResponseRootObject>({
      url: `/api/v1/friendships/${action}/${id}/`,
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        user_id: id,
        radio_type: this.client.state.radioType,
        _uid: this.client.state.cookieUserId,
        device_id: this.client.state.deviceId,
        _uuid: this.client.state.uuid,
        media_id_attribution: mediaIdAttribution,
      }),
    });
    return body.friendship_status;
  }
}
