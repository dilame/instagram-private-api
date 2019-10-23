import { IgApiClient, StorySticker } from '../src';
import Bluebird = require('bluebird');
import { readFile } from 'fs';

const ig = new IgApiClient();

async function login() {
  ig.state.generateDevice(process.env.IG_USERNAME);
  ig.state.proxyUrl = process.env.IG_PROXY;
  await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
}

(async () => {
  await login();
  const path = './myStory.jpg';
  const file = await Bluebird.fromCallback<Buffer>(cb => readFile(path, cb));

  // these stickers are 'invisible' and not 're-rendered' in the app
  /**
   * Our story will look like this:
   * ==========
   * | #insta |
   * |--------|
   * | #okay  |
   * ==========
   */
  await uploadStoryWithHashtags(file);

  /**
   * Our story will look like this:
   * ==========
   * | @user1 |
   * |--------|
   * | @user2 |
   * ==========
   */
  await uploadStoryWithMentions(file);

  /**
   * Our story will look like this:
   * ==========
   * | ------ |
   * |location|
   * | ------ |
   * ==========
   */
  await uploadStoryWithLocation(file);

  /**
   * Our story will look like this:
   * ==========
   * | ------ |
   * | |pic | |
   * | ------ |
   * ==========
   */
  await uploadStoryWithMedia(file);

  // from now on, you'll be able to 'see' the stickers in the app
  await uploadStoryWithPoll(file);

  await uploadStoryWithSlider(file);

  await uploadStoryWithQuestion(file);

  await uploadStoryWithCountdown(file);

  await uploadStoryWithChat(file);
})();

/**
 * Generates a position in the upper part of the story
 * @param width - width of the sticker
 * @param height - height of the sticker
 */
const upperSticker = (width: number, height: number): StorySticker => ({
  x: 0.5,
  y: 0.25,
  width,
  height,
  rotation: 0.0,
});

/**
 * Generates a position in the center
 * @param width - width of the sticker
 * @param height - height of the sticker
 */
const centeredSticker = (width: number, height: number): StorySticker => ({
  x: 0.5,
  y: 0.5,
  width,
  height,
  rotation: 0.0,
});

/**
 * Generates a position in the lower part of the story
 * @param width - width of the sticker
 * @param height - height of the sticker
 */
const lowerSticker = (width: number, height: number): StorySticker => ({
  x: 0.5,
  y: 0.75,
  width,
  height,
  rotation: 0.0,
});

async function uploadStoryWithHashtags(file: Buffer) {
  return await ig.publish.story({
    file,
    hashtags: [{
      ...upperSticker(0.9, 0.5),
      is_sticker: true,
      tag_name: 'insta',
      use_custom_title: false,
    }, {
      ...lowerSticker(0.9, 0.5),
      is_sticker: true,
      tag_name: 'okay',
      use_custom_title: false,
    }],
  });
}

async function uploadStoryWithMentions(file: Buffer) {
  return await ig.publish.story({
    file,
    mentions: [{
      ...upperSticker(0.9, 0.5),
      user_id: await ig.user.getIdByUsername('user1'),
    }, {
      ...lowerSticker(0.9, 0.5),
      user_id: await ig.user.getIdByUsername('user2'),
    }],
  });
}

async function uploadStoryWithLocation(file: Buffer) {
  // get any location
  const { lat, lng, external_id } = (await ig.locationSearch.index(0, 0, 'Instagram')).venues[0];
  return await ig.publish.story({
    file,
    location: {
      latitude: lat.toString(),
      longitude: lng.toString(),
      sticker: {
        ...centeredSticker(0.9, 0.5),
        is_sticker: true,
        location_id: external_id,
      },
    },
  });
}

async function uploadStoryWithMedia(file: Buffer) {
  // get the last media
  const { pk } = (await ig.feed.user(ig.state.cookieUserId).items())[0];
  return await ig.publish.story({
    file,
    media: {
      ...centeredSticker(0.8, 0.8),
      is_sticker: true,
      media_id: pk,
    },
  });
}

async function uploadStoryWithPoll(file: Buffer) {
  return await ig.publish.story({
    file,
    poll: {
      ...centeredSticker(0.9, 0.166),
      question: 'My question',
      viewer_vote: 0,
      viewer_can_vote: true,
      is_sticker: true,
      tallies: [{
        count: 0,
        text: 'YES',
        font_size: 20.0,
      }, {
        count: 0,
        text: 'NO',
        font_size: 20.0,
      }],
    },
  });
}

async function uploadStoryWithSlider(file: Buffer) {
  return await ig.publish.story({
    file,
    slider: {
      ...centeredSticker(0.9, 0.248),
      question: 'My question',
      // on windows: use [WIN] + [.]
      emoji: '❤',
      background_color: '#000000',
      text_color: '#ffffff',
      is_sticker: true,
    },
  });
}

async function uploadStoryWithQuestion(file: Buffer) {
  return await ig.publish.story({
    file,
    question: {
      ...centeredSticker(0.9, 0.5),
      question: 'My question',
      question_type: 'text',
      profile_pic_url: (await ig.user.info(ig.state.cookieUserId)).profile_pic_url,
      text_color: '#ffffff',
      background_color: '#000000',
      is_sticker: true,
      viewer_can_interact: true,
    },
  });
}

async function uploadStoryWithCountdown(file: Buffer) {
  return await ig.publish.story({
    file,
    countdown: {
      ...centeredSticker(0.9, 0.2),
      text: 'My countdown',
      text_color: '#ffffff',
      start_background_color: '#fa0daf',
      end_background_color: '#af0dfa',
      digit_card_color: '#fafafa',
      digit_color: '#ffffff',
      is_sticker: true,
      following_enabled: true,
      // time until the hour increments (as unix-time)
      end_ts: new Date().setMinutes(60) / 1000,
    },
  });
}

async function uploadStoryWithChat(file: Buffer) {
  return await ig.publish.story({
    file,
    chat: {
      ...centeredSticker(0.9, 0.2),
      text: 'My chat',
      start_background_color: '#fa0daf',
      end_background_color: '#af0dfa',
      is_sticker: true,
      has_started_chat: false,
    },
  });
}
