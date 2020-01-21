import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';
import { AndroidState } from '../core/android.state';

import {
  DirectRepositoryCreateGroupThreadResponseRootObject,
  DirectRepositoryGetPresenceResponseRootObject,
  DirectRepositoryRankedRecipientsResponseRootObject,
} from '../responses';

@injectable()
export class DirectRepository {
  constructor(private http: AndroidHttp, private state: AndroidState) {}
  public async createGroupThread(
    recipientUsers: string[],
    threadTitle: string,
  ): Promise<DirectRepositoryCreateGroupThreadResponseRootObject> {
    const { body } = await this.http.send({
      url: '/api/v1/direct_v2/create_group_thread/',
      method: 'POST',
      form: this.http.sign({
        _csrftoken: this.state.cookieCsrfToken,
        _uuid: this.state.uuid,
        _uid: this.state.cookieUserId,
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
    const { body } = await this.http.send<DirectRepositoryRankedRecipientsResponseRootObject>({
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
    const { body } = await this.http.send<DirectRepositoryGetPresenceResponseRootObject>({
      url: '/api/v1/direct_v2/get_presence/',
      method: 'GET',
    });
    return body;
  }
}
