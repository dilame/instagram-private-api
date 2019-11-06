/* tslint:disable:no-console */
import 'dotenv/config';
import { IgApiClient } from '../src';
import { json2ts } from 'json-ts/dist';
import { camelCase } from 'lodash';
import * as fs from 'fs';
import { promisify } from 'util';

/* async fs functions - uncomment the needed wrappers */
//const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

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

async function login() {
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.state.proxyUrl = process.env.IG_PROXY;
  return await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
}

(async function mainAsync() {
  await login();

  try {

  } catch (e) {
    console.error(e);
  }
})();
