import { injectable } from 'tsyringe';
import { AndroidHttp } from '../core/android.http';
import { AndroidState } from '../core/android.state';

import { IgAppModule } from '../types';
import { AddressBookRepositoryLinkResponseRootObject } from '../responses/address-book.repository.link.response';
import { StatusResponse } from '../responses';

@injectable()
export class AddressBookRepository {
  constructor(private http: AndroidHttp, private state: AndroidState) {}
  public async link(
    contacts: Array<{
      phone_numbers: string[];
      email_addresses: string[];
      first_name: string;
      last_name: string;
    }>,
    module?: IgAppModule,
  ): Promise<AddressBookRepositoryLinkResponseRootObject> {
    const { body } = await this.http.send<AddressBookRepositoryLinkResponseRootObject>({
      url: '/api/v1/address_book/link/',
      method: 'POST',
      form: {
        phone_id: this.state.phoneId,
        module: module || 'find_friends_contacts',
        contacts: JSON.stringify(contacts),
        _csrftoken: this.state.cookieCsrfToken,
        device_id: this.state.deviceId,
        _uuid: this.state.uuid,
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
    const { body } = await this.http.send({
      url: '/api/v1/address_book/acquire_owner_contacts/',
      method: 'POST',
      form: {
        phone_id: this.state.phoneId,
        _csrftoken: this.state.cookieCsrfToken,
        me: JSON.stringify(me),
        _uuid: this.state.uuid,
      },
    });
    return body;
  }
}
