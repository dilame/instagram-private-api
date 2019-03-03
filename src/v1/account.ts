import * as _ from 'lodash';
import * as Bluebird from 'bluebird';
import { plainToClass } from 'class-transformer';
import { User } from '../models/user';
import { Request, Session, IGAccountNotFoundError, RequestError } from '../core';
import { Helpers } from '../helpers';

export class Account {
  static async getById(session: Session, id: string | number): Promise<User> {
    const data = await new Request(session)
      .setMethod('GET')
      .setResource('userInfo', { id })
      .send();
    return plainToClass(User, data.user as User);
  }

  static async search(session: Session, username: string): Promise<User[]> {
    const uid = await session.getAccountId();
    const rankToken = Helpers.buildRankToken(uid);
    const data = await new Request(session)
      .setMethod('GET')
      .setResource('accountsSearch', {
        query: username,
        rankToken,
      })
      .send();
    return plainToClass(User, data.users);
  }

  static async searchForUser(session: Session, username: string): Promise<User> {
    username = username.toLowerCase();
    const accounts = await Account.search(session, username);
    const account = accounts.find(account => account.username === username);
    if (!account) throw new IGAccountNotFoundError();
    return account;
  }

  static async setProfilePicture(session: Session, streamOrPath: any): Promise<User> {
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
    return plainToClass(User, data.user as User);
  }

  static async setPrivacy(session: Session, pri: boolean | number | string): Promise<User> {
    const data = await new Request(session)
      .setMethod('POST')
      .setResource(pri ? 'setAccountPrivate' : 'setAccountPublic')
      .generateUUID()
      .signPayload()
      .send();
    return plainToClass(User, data.user as User);
  }

  static editProfile(session: Session, settings: any): Bluebird<User> {
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
        const account = plainToClass(User, json.user as User);
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

  static async showProfile(session: Session): Promise<User> {
    const data = await new Request(session)
      .setMethod('GET')
      .setResource('currentAccount')
      .send();
    return plainToClass(User, data.user as User);
  }
}
