/* tslint:disable:no-console */
import { IgApiClient } from '../src';
import * as Bluebird from 'bluebird';
import { readFile } from 'fs';

const ig = new IgApiClient();

async function login() {
  // basic login-procedure
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.state.proxyUrl = process.env.IG_PROXY;
  await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
}

(async () => {
  await login();

  const videoPath = './myVideo.mp4';
  const coverPath = './myVideoCover.jpg';

  const publishResult = await ig.publish.video({
    // read the file into a Buffer
    video: await Bluebird.fromCallback(cb => readFile(videoPath, cb)),
    coverImage: await Bluebird.fromCallback(cb => readFile(coverPath, cb)),
    /*
      this does also support:
      caption (string),  ----+
      usertags,          ----+----> See upload-photo.example.ts
      location,          ----+
     */
  });

  console.log(publishResult);
})();
