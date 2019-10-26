/* tslint:disable:no-console */
import { DirectThreadEntity, IgApiClient } from '../src';
import { promisify } from 'util';
import { readFile } from 'fs';

// use node v8 or later or the util npm package
const readFileAsync = promisify(readFile);

const ig = new IgApiClient();

async function login() {
  // basic login-procedure
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.state.proxyUrl = process.env.IG_PROXY;
  await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
}

(async () => {
  await login();

  // get the first thread
  const [thread] = await ig.feed.directInbox().records();

  await sendPhoto(thread);
  await sendVideo(thread);
  await sendPhotoStory(thread);
  await sendVideoStory(thread);
})();

/**
 * Sends a regular photo to the thread
 * @param thread
 */
async function sendPhoto(thread: DirectThreadEntity) {
  const photo: Buffer = await readFileAsync('PATH_TO_PHOTO.jpg');
  console.log(await thread.broadcastPhoto({
    file: photo,
  }));
}

/**
 * Sends a regular video to the thread
 * @param thread
 */
async function sendVideo(thread: DirectThreadEntity) {
  const video: Buffer = await readFileAsync('PATH_TO_VIDEO.mp4');
  console.log(await thread.broadcastVideo({
    video,
    // optional if you get a 202 transcode error
    // delay in ms
    transcodeDelay: 5 * 1000, // 5ms * 1000ms = 5s
  }));
}

/**
 * Sends a story with a video
 * The story is replayable
 * @param thread
 */
async function sendVideoStory(thread: DirectThreadEntity) {
  const video = await readFileAsync('PATH_TO_VIDEO.mp4');
  const cover = await readFileAsync('PATH_TO_COVER.jpg');
  console.log(await thread.broadcastStory({
    video,
    coverImage: cover,
    viewMode: 'replayable',
  }));
}

/**
 * Sends a story with a photo
 * The story can only be seen once
 * @param thread
 */
async function sendPhotoStory(thread: DirectThreadEntity) {
  const photo = await readFileAsync('PATH_TO_PHOTO.jpg');
  console.log(await thread.broadcastStory({
    file: photo,
    viewMode: 'once',
  }));
}
