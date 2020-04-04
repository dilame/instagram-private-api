/* tslint:disable:no-console */
import 'dotenv/config';
import { IgApiClient } from '../src';
import { json2ts } from 'json-ts/dist';
import { camelCase } from 'lodash';
import * as fs from 'fs';
import { promisify } from 'util';

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
    await ig.qe.syncLoginExperiments();
  } else {
    await ig.qe.syncLoginExperiments();
    return await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
  }
}

(async function mainAsync() {
  ig.state.generateDevice(process.env.IG_USERNAME);
  await login();
  try {
    console.log(await ig.publish.photo({
      file: await readFileAsync('D:\\ShareX\\Screenshots\\2020-01-10_19-47-29.jpg'),
    }));
  } catch (e) {
    console.error(e);
    console.error(e.response.body);
  }
})();
