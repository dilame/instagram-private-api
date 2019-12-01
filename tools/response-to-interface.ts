/* tslint:disable:no-console */
import 'dotenv/config';
import { IgApiClient } from '../src';
import { json2ts } from 'json-ts/dist';
import { camelCase } from 'lodash';
import * as fs from 'fs';
import { promisify } from 'util';
import { StickerBuilder } from '../src/sticker-builder';
import { DateTime } from 'luxon';

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

async function login() {
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.request.end$.subscribe(async () => {
    const state = await ig.state.serialize();
    delete state.constants;
    await writeFileAsync(statePath, JSON.stringify(state), { encoding: 'utf8' });
  });
  if (await existsAsync(statePath)) {
    await ig.state.deserialize(await readFileAsync(statePath, {encoding: 'utf8'}));
  } else {
    return await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
  }
}

(async function mainAsync() {
  await login();
  try {
    console.log(new StickerBuilder()
      .add(StickerBuilder.chat({text: 'chat'}))
      .add(StickerBuilder.countdown({endTs: DateTime.local(), text: 'end'}))
      .add(StickerBuilder.hashtag({tagName: 'me_smile'}))
      .add(StickerBuilder.location({locationId: '0'}))
      .add(StickerBuilder.mention({userId: '1'}))
      .add(StickerBuilder.poll({question: 'Question', tallies: [{text: '1'}, {text: '2', fontSize: 31.0}]}))
      .add(StickerBuilder.question({question: 'qq'}))
      .add(StickerBuilder.quiz({question: 'q', correctAnswer: 0, options: ['1', '2']}))
      .add(StickerBuilder.slider({question: '11', emoji: '❤'}))
      .build(),
    );
  } catch (e) {
    console.error(e);
    // console.error(e.response.body);
  }
})();
