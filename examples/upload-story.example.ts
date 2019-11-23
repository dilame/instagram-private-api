import { IgApiClient } from '../src';
import Bluebird = require('bluebird');
import { readFile } from 'fs';
import { DateTime, Duration } from 'luxon';

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

  /**
   *  You can move and rotate stickers by using one of these methods:
   *  center()
   *  rotateDeg(180) rotates 180°
   *  scale(0.5) scales the sticker to 1/2 of it's size
   *  moveForward() moves the sticker in front
   *  moveBackwards() moves the sticker in the background
   *  right() aligns the sticker to the right
   *  left() aligns the sticker to the left
   *  top() aligns the sticker to the top
   *  bottom() aligns the sticker to the bottom
   *
   *  All of these are chainable e.g.:
   *  ig.sticker.hashtag({ tagName: 'tag' }).scale(0.5).rotateDeg(90).center().left()
   */

  // these stickers are 'invisible' and not 're-rendered' in the app
  await ig.publish.story({
    file,
    // this creates a new config
    stickerConfig: ig.sticker.init()
    // these are all supported stickers
      .add(ig.sticker.hashtag({
        tagName: 'insta',
      }).center())
      .add(ig.sticker.mention({
        userId: ig.state.cookieUserId,
      }).center())
      .add(ig.sticker.question({
        question: 'My Question',
      }).scale(0.5))
      .add(ig.sticker.question({
        question: 'Music?',
        questionType: 'music',
      }))
      .add(ig.sticker.countdown({
        text: 'My Countdown',
        endTs: DateTime.local().plus(Duration.fromObject({ hours: 1 })), // countdown finishes in 1h
      }))
      .add(ig.sticker.chat({
        text: 'Chat name',
      }))
      .add(ig.sticker.location({
        locationId: (await ig.locationSearch.index(13, 37)).venues[0].external_id,
      }))
      .add(ig.sticker.poll({
        question: 'Question',
        tallies: [{ text: 'Left' }, { text: 'Right' }],
      }))
      .add(ig.sticker.quiz({
        question: 'Question',
        options: ['0', '1', '2', '3'],
        correctAnswer: 1,
      }))
      .add(ig.sticker.slider({
        question: 'Question',
        emoji: '❤',
      }))
      .build(),
  });
})();
