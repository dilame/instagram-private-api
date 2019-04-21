import { Repository } from '../core/repository';
import { DirectThreadRepositoryBroadcastResponseRootObject } from '../responses';
import { DirectThreadBroadcastOptions } from '../types/direct-thread.broadcast.options';
import Chance = require('chance');

export class DirectThreadRepository extends Repository {
  public async broadcast(options: DirectThreadBroadcastOptions) {
    const mutationToken = new Chance().guid();
    const recipients = options.threadIds || options.userIds

    const { body } = await this.client.request.send<DirectThreadRepositoryBroadcastResponseRootObject>({
      url: `/api/v1/direct_v2/threads/broadcast/${options.item}/`,
      method: 'POST',
      form: {
        action: 'send_item',
        [options.threadIds ? 'thread_ids' : 'recipient_users']: JSON.stringify(recipients instanceof Array ? recipients : [recipients])
        client_context: mutationToken,
        _csrftoken: this.client.state.CSRFToken,
        device_id: this.client.state.deviceId,
        mutation_token: mutationToken,
        _uuid: this.client.state.uuid,
        ...options.form,
      },
    });
    return body;
  }
}
