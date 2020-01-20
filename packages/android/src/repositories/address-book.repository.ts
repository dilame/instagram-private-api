import { Repository } from '../core/repository';
import { IgAppModule } from '../types';
import { AddressBookRepositoryLinkResponseRootObject } from '../responses/address-book.repository.link.response';
import { StatusResponse } from '../responses';

export class AddressBookRepository extends Repository {
  public async link(
    contacts: Array<{
      phone_numbers: string[];
      email_addresses: string[];
      first_name: string;
      last_name: string;
    }>,
    module?: IgAppModule,
  ): Promise<AddressBookRepositoryLinkResponseRootObject> {
    const { body } = await this.client.request.send<AddressBookRepositoryLinkResponseRootObject>({
      url: '/api/v1/address_book/link/',
      method: 'POST',
      form: {
        phone_id: this.client.state.phoneId,
        module: module || 'find_friends_contacts',
        contacts: JSON.stringify(contacts),
        _csrftoken: this.client.state.cookieCsrfToken,
        device_id: this.client.state.deviceId,
        _uuid: this.client.state.uuid,
      },
    });
    return body;
  }

  public async acquireOwnerContacts(me: {
    phone_numbers: string[];
    email_addresses: string[];
    first_name?: string;
    last_name?: string;
  }): Promise<StatusResponse> {
    const { body } = await this.client.request.send({
      url: '/api/v1/address_book/acquire_owner_contacts/',
      method: 'POST',
      form: {
        phone_id: this.client.state.phoneId,
        _csrftoken: this.client.state.cookieCsrfToken,
        me: JSON.stringify(me),
        _uuid: this.client.state.uuid,
      },
    });
    return body;
  }
}
