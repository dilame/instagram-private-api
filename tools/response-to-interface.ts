/* tslint:disable:no-console */
import 'dotenv/config';
import { IgApiClient } from '../src';
import * as Bluebird from 'bluebird';
import { json2ts } from 'json-ts/dist';
import { camelCase } from 'lodash';
import { writeFile } from 'fs';

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
  return await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
}

(async function mainAsync() {
  await login();

  console.log();
})();
