/* tslint:disable:no-console */
import 'dotenv/config';
import { AccountRepositoryLoginResponseRootObject, IgApiClient } from '../src';
import { json2ts } from 'json-ts/dist';
import { camelCase } from 'lodash';
import * as fs from 'fs';
import { promisify } from 'util';
import * as crypto from 'crypto';

/* async fs functions - uncomment the needed wrappers */
// @ts-ignore
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);
const existsAsync = promisify(fs.exists);

const statePath = 'tools/state.json';

const ig = new IgApiClient();

// @ts-ignore
async function createInterface(request: Promise<any>, outputName: string) {
  const json = await request;
  const camelCasedOutputName = camelCase(outputName);
  let interfaces = json2ts(JSON.stringify(json), {
    prefix: camelCasedOutputName.charAt(0).toUpperCase() + camelCasedOutputName.slice(1) + 'Response',
  });
  interfaces = interfaces.replace(/interface/g, 'export interface');
  const fileName = `${outputName}.response`;
  await writeFileAsync(`./src/responses/${fileName}.ts`, interfaces);
  console.log('Success');
  return json;
}

// @ts-ignore
async function login() {
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.request.end$.subscribe(async () => {
    const state = await ig.state.serialize();
    delete state.constants;
    await writeFileAsync(statePath, JSON.stringify(state), { encoding: 'utf8' });
  });
  if (await existsAsync(statePath)) {
    await ig.state.deserialize(await readFileAsync(statePath, { encoding: 'utf8' }));
  } else {
    return await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
  }
}

(async function mainAsync() {
  ig.state.generateDevice(process.env.IG_USERNAME);
  await ig.qe.syncLoginExperiments();
  // await login();
  try {
    console.log(await encryptedLogin(process.env.IG_USERNAME, process.env.IG_PASSWORD));
  } catch (e) {
    console.error(e);
    console.error(e.response.body);
  }
})();

function concat(...args: Buffer[]): Buffer {
  return Buffer.concat(args);
}

// @ts-ignore
async function encryptedLogin(username: string, password: string) {
  const { time, encrypted } = encryptPassword(password);
  const buf = Buffer.from(encrypted, 'base64');
  console.log(buf.readUInt16LE(0xe));
  const { body } = await ig.request.send<AccountRepositoryLoginResponseRootObject>({
    method: 'POST',
    url: '/api/v1/accounts/login/',
    form: ig.request.sign({
      username,
      password,
      guid: ig.state.uuid,
      phone_id: ig.state.phoneId,
      _csrftoken: ig.state.cookieCsrfToken,
      device_id: ig.state.deviceId,
      enc_password: `#PWD_INSTAGRAM:4:${time}:${encrypted}`,
      adid: '' /*this.client.state.adid ? not set on pre-login*/,
      google_tokens: '[]',
      login_attempt_count: '0',
      country_codes: JSON.stringify([{ country_code: '1', source: 'default' }]),
      // jazoest: AccountRepository.createJazoest(this.client.state.phoneId),
    }),
  });
  return body;
}

function encryptPassword(password: string): { time: string, encrypted: string } {
  const plainKey = Buffer.from(ig.state.passwordEncryptionPubKey, 'base64').toString();
  const randKey = crypto.randomBytes(32);
  const iv = crypto.randomBytes(12);
  const rsaEncrypted = crypto.publicEncrypt(plainKey, randKey);
  const cipher = crypto.createCipheriv('aes-256-gcm', randKey, iv);
  const time = Math.floor(Date.now() / 1000).toString();
  cipher.setAAD(Buffer.from(time));
  const aesEncrypted = concat(cipher.update(password, 'utf8'), cipher.final());
  const sizeBuffer = Buffer.alloc(2, 0);
  sizeBuffer.writeInt16LE(rsaEncrypted.byteLength, 0);
  const authTag = cipher.getAuthTag();
  return {
    time,
    encrypted: concat(
      Buffer.from([1, ig.state.passwordEncryptionKeyId]),
      iv,
      sizeBuffer,
      rsaEncrypted, authTag, aesEncrypted)
      .toString('base64'),
  };
}
