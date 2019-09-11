import { Repository } from '../core/repository';
import {
  DirectRepositoryCreateGroupThreadResponseRootObject,
  DirectRepositoryGetPresenceResponseRootObject,
  DirectRepositoryRankedRecipientsResponseRootObject,
} from '../responses';

export class DirectRepository extends Repository {
  public async createGroupThread(
    recipientUsers: string[],
    threadTitle: string,
  ): Promise<DirectRepositoryCreateGroupThreadResponseRootObject> {
    const { body } = await this.client.request.send({
      url: '/api/v1/direct_v2/create_group_thread/',
      method: 'POST',
      form: this.client.request.sign({
        _csrftoken: this.client.state.cookieCsrfToken,
        _uuid: this.client.state.uuid,
        _uid: this.client.state.cookieUserId,
        recipient_users: JSON.stringify(recipientUsers),
        thread_title: threadTitle,
      }),
    });
    return body;
  }

  public async rankedRecipients(
    mode: 'raven' | 'reshare' = 'raven',
    query = '',
  ): Promise<DirectRepositoryRankedRecipientsResponseRootObject> {
    const { body } = await this.client.request.send<DirectRepositoryRankedRecipientsResponseRootObject>({
      url: '/api/v1/direct_v2/ranked_recipients/',
      method: 'GET',
      qs: {
        mode,
        query,
        show_threads: true,
      },
    });
    return body;
  }

  public async getPresence(): Promise<DirectRepositoryGetPresenceResponseRootObject> {
    const { body } = await this.client.request.send<DirectRepositoryGetPresenceResponseRootObject>({
      url: '/api/v1/direct_v2/get_presence/',
      method: 'GET',
    });
    return body;
  }
}
