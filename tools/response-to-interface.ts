import 'dotenv/config';
import { IgApiClient } from '../src';
import * as Bluebird from 'bluebird';
import { writeFile } from 'fs';
import { json2ts } from 'json-ts/dist';
import { camelCase } from 'lodash';
import { async } from 'rxjs/internal/scheduler/async';

const ig = new IgApiClient();

// Modify this function as you wish to get needed json
async function getResponse(request: Promise<any>) {
  return await request;
}

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

  const { broadcast_id } = await createInterface(ig.live.createBroadcast(), 'live.create-broadcast');
  await createInterface(ig.live.startBroadcast(broadcast_id, false), 'live.start-broadcast');
  await createInterface(ig.live.enableComments(broadcast_id), 'live.switch-comments');
  await createInterface(ig.live.comment(broadcast_id, 'create interface'), 'live.comment');
  await createInterface(ig.live.getComments(broadcast_id), 'live.comments');
  await createInterface(ig.live.getHeartbeatViewerCount(broadcast_id), 'live.heartbeat-viewer-count');
  await createInterface(ig.live.getInfo(broadcast_id), 'live.info');
  await createInterface(ig.live.endBroadcast(broadcast_id), 'live.end-broadcast');
  await createInterface(ig.live.getFinalViewers(broadcast_id), 'live.final-viewers');
})();
