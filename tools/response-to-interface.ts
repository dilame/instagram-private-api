/* tslint:disable:no-console */
import 'dotenv/config';
import { IgApiClient } from '../src';
import * as Bluebird from 'bluebird';
import { json2ts } from 'json-ts/dist';
import { camelCase } from 'lodash';
import { readFile, writeFile } from 'fs';

const ig = new IgApiClient();

// Modify this function as you wish to get needed json
async function getResponse(request: Promise<any>) {
  return await request;
}

// @ts-ignore
async function createInterface(request: Promise<any>, outputName: string) {
  const json = await getResponse(request);
  const camelCasedOutputName = camelCase(outputName);
  let interfaces = json2ts(JSON.stringify(json), {
    prefix: camelCasedOutputName.charAt(0).toUpperCase() + camelCasedOutputName.slice(1) + 'Response',
  });
  interfaces = interfaces.replace(/interface/g, 'export interface');
  await Bluebird.fromCallback(cb => writeFile(`./src/responses/${outputName}.response.ts`, interfaces, cb));
  console.log('Success');
  return json;
}

async function login() {
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.state.proxyUrl = process.env.IG_PROXY;
  await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
}

(async function mainAsync() {
  await login();
  const path = 'D:\\ShareX\\Screenshots\\NVIDIA_Share_2019-07-05_19-00-56.jpg';
  const res = await ig.publish.story({
    file: await Bluebird.fromCallback(cb => readFile(path, cb)),
  });
  console.log(res);
})();
