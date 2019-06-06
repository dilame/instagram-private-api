import { Repository } from '../core/repository';
import { DirectRepositoryRankedRecipientsResponse } from '../responses/direct.repository.ranked-recipients.response';

export class DirectRepository extends Repository {
  async rankedRecipients(mode: 'raven' | 'reshare' = 'raven', query = '') {
    const { body } = await this.client.request.send<DirectRepositoryRankedRecipientsResponse>({
      url: '/api/v1/direct_v2/ranked_recipients/',
      qs: {
        mode,
        query,
        show_threads: true,
      },
    });
    return body;
  }
  async getPresence() {
    const { body } = await this.client.request.send({
      url: '/api/v1/direct_v2/get_presence/',
    });
    return body;
  }
}
