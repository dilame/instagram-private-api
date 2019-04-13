import 'dotenv/config';
import { IgApiClient } from '../src';
import * as Bluebird from 'bluebird';
import { writeFile } from 'fs';
import { json2ts } from 'json-ts/dist';
import { camelCase } from 'lodash';

// Modify this function as you wish to get needed json
async function getResponse() {
  const ig = new IgApiClient();
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.state.proxyUrl = process.env.IG_PROXY;
  await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
  return await ig.feed.tag('hello').request();
}

(async function createInterface(outputName: string) {
  const json = await getResponse();
  const camelCasedOutputName = camelCase(outputName);
  let interfaces = json2ts(JSON.stringify(json), {
    prefix: camelCasedOutputName.charAt(0).toUpperCase() + camelCasedOutputName.slice(1) + 'Response',
  });
  interfaces = interfaces.replace(/interface/g, 'export interface');
  await Bluebird.fromCallback(cb => writeFile(`./src/responses/${outputName}.response.ts`, interfaces, cb));
  console.log('Success');
})(
  // And pass output name
  'tag.feed',
);
