import * as _ from 'lodash';
import { plainToClass } from 'class-transformer';
import { UserResponse } from '../responses/user.response';
import { IGAccountNotFoundError, Request, RequestError, Session } from '../core';
import { Helpers } from '../helpers';

export class Account {
  static async getById(session: Session, id: string | number): Promise<UserResponse> {
    const data = await new Request(session)
      .setMethod('GET')
      .setResource('userInfo', { id })
      .send();
    return plainToClass(UserResponse, data.user as UserResponse);
  }

  static async search(session: Session, username: string): Promise<UserResponse[]> {
    const uid = await session.getAccountId();
    const rankToken = Helpers.buildRankToken(uid);
    const data = await new Request(session)
      .setMethod('GET')
      .setResource('accountsSearch', {
        query: username,
        rankToken,
      })
      .send();
    return plainToClass(UserResponse, data.users);
  }

  static async searchForUser(session: Session, username: string): Promise<UserResponse> {
    username = username.toLowerCase();
    const accounts = await Account.search(session, username);
    const account = accounts.find(account => account.username === username);
    if (!account) throw new IGAccountNotFoundError();
    return account;
  }

  static async setProfilePicture(session: Session, streamOrPath: any): Promise<UserResponse> {
    const stream = Helpers.pathToStream(streamOrPath);
    const request = new Request(session);
    const data = await request
      .setMethod('POST')
      .setResource('changeProfilePicture')
      .generateUUID()
      .signPayload()
      .transform(opts => {
        opts.formData.profile_pic = {
          value: stream,
          options: {
            filename: 'profile_pic',
            contentType: 'image/jpeg',
          },
        };
        return opts;
      })
      .send();
    return plainToClass(UserResponse, data.user as UserResponse);
  }

  static async setPrivacy(session: Session, pri: boolean | number | string): Promise<UserResponse> {
    const data = await new Request(session)
      .setMethod('POST')
      .setResource(pri ? 'setAccountPrivate' : 'setAccountPublic')
      .generateUUID()
      .signPayload()
      .send();
    return plainToClass(UserResponse, data.user as UserResponse);
  }

  static editProfile(session: Session, settings: any): any {
    settings = _.isObject(settings) ? settings : {};
    if (_.isString(settings.phoneNumber)) settings.phone_number = settings.phoneNumber;
    if (_.isString(settings.fullName)) settings.first_name = settings.fullName;
    if (_.isString(settings.externalUrl)) settings.external_url = settings.externalUrl;
    const pickData = o =>
      _.pick(o, 'gender', 'biography', 'phone_number', 'first_name', 'external_url', 'username', 'email');
    return new Request(session)
      .setMethod('GET')
      .setResource('currentAccount')
      .send()
      .then(json =>
        new Request(session)
          .setMethod('POST')
          .setResource('editAccount')
          .generateUUID()
          .setData(pickData(_.extend(json.user, settings)))
          .signPayload()
          .send(),
      )
      .then(json => {
        const account = plainToClass(UserResponse, json.user as UserResponse);
        return this.getById(session, account.id);
      })
      .catch(e => {
        if (e && e.json && e.json.message && _.isArray(e.json.message.errors)) {
          throw new RequestError({
            message: e.json.message.errors.join('. '),
          });
        }
        throw e;
      });
  }

  static async showProfile(session: Session): Promise<UserResponse> {
    const data = await new Request(session)
      .setMethod('GET')
      .setResource('currentAccount')
      .send();
    return plainToClass(UserResponse, data.user as UserResponse);
  }
}
