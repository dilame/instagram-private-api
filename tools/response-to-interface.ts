/* tslint:disable:no-console */
import 'dotenv/config';
import { IgApiClient } from '../src';
import { json2ts } from 'json-ts/dist';
import { camelCase } from 'lodash';
import * as fs from 'fs';
import { promisify } from 'util';

/* async fs functions - uncomment the needed wrappers */
const readFileAsync = promisify(fs.readFile);
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
    console.log(await ig.publish.story({
      file: await readFileAsync('D:\\ShareX\\Screenshots\\webstorm64_2019-11-19_19-21-59.jpg'),
      question: {
        question: 'My question',
        question_type: 'text',
        profile_pic_url: '',
        text_color: '#ffffff',
        background_color: '#000000',
        is_sticker: true,
        viewer_can_interact: true,
        x: 0.5,
        y: 0.5,
        width: 0.5,
        height: 0.43,
        rotation: 0,
      },
      hashtags: [{
        tag_name: 'instagram',
        use_custom_title: false,
        is_sticker: true,
        x: 0.0,
        y: 0.1,
        width: 0.4,
        height: 0.2,
        rotation: 0,
      }],
    }));
    console.log(await ig.publish.story({
      file: await readFileAsync('D:\\ShareX\\Screenshots\\webstorm64_2019-11-19_19-21-59.jpg'),
      stickerConfig: ig.sticker.init()
        .add(ig.sticker.question({ question: 'My question' }).center())
        .add(ig.sticker.hashtag({ tagName: 'instagram' }).center().top().scale(0.25))
        .build(),
    }));
  } catch (e) {
    console.error(e);
  }
})();
