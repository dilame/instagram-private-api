# NodeJS Instagram private API client

![logo](https://cloud.githubusercontent.com/assets/1809268/15931032/2792427e-2e56-11e6-831e-ffab238cc4a2.png)

[![Telegram Chat](https://img.shields.io/badge/telegram-join%20chat-informational.svg)](https://t.me/igpapi)
[![npm](https://img.shields.io/npm/dm/instagram-private-api.svg?maxAge=600)](https://www.npmjs.com/package/instagram-private-api)
[![npm](https://img.shields.io/npm/l/instagram-private-api.svg?maxAge=600)](https://github.com/huttarichard/instagram-private-api/blob/master/LICENSE)
[![Join the chat at https://gitter.im/instagram-private-api/Lobby](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/instagram-private-api/Lobby)

---

# Next major version

Me and [Nerix](https://github.com/Nerixyz) are ready to announce the next 2.x.x version of this library.
It has extended feature list.
It's a big release.
We have significantly expanded the functionality and capabilities.
The library turned into a monorepository and now it's a set of libraries, connected in an ecosystem.
It consists of

- Android API
- Web API
- FBNS, Realtime

We've done some work on design decisions.
We simplified the state management process.
Now you can easily make a snapshot of account state, save it in a persistent storage and then restore a 1-to-1 copy with just 1 function call.
With new realtime features you can listen for new direct messages, notifications and any other events.

The new version is hosted in private repository. Access is paid.
Members get **basic** support for installation, configuration, and usage.
We also will try to react on your feature requests.

You can contact me in [telegram](https://t.me/bowzee) or [email](mailto:dilame.bowzee@gmail.com) for details.

# AD: SaaS Instagram API

Excited to announce SaaS Instagram API
http://open.igpapi.com/

It uses OpenAPI specification, so you can generate SDK for any programming language in several minutes.

You can use it right in the browser without need to have a server.

You can even use it in React Native. Yes, without bridges.

It's free for a while, until it's stable. The function set is poor now, because, to be honest i'm not sure if there's a demand for it.
So if you would like to use it, have feature-requests or bug reports - please [contact me](https://t.me/bowzee) - i'll implement things you need very fast.

# Table of Contents

- [Install](#install)
- [Support us](#support-us)
- [Examples](#examples)
- [Basic Concepts](#basic-concepts)
  - [Feeds](#feeds)
  - [Repositories](#repositories)
  - [Services](#services)
- [Contribution](#contribution)
- [Useful Links](#useful-links)
  - [Special Thanks](#special-thanks)
  - [Thanks to Contributors](#thanks-to-contributors)
  - [End User License Agreement (EULA)](#end-user-license-agreement-eula)

# Install

From npm

```
npm install instagram-private-api
```

From github

```
npm install github:dilame/instagram-private-api
```

# Support us

If you find this library useful for you, you can support it by donating any amount

BTC: 1Dqnz9QuswAvD3t7Jsw7LhwprR6HAWprW6

# Examples

You can find usage examples [here](examples)

_Note for JavaScript users:_
As of Node v.13.5.0, there isn't support for ESModules and the 'import'-syntax.
So you have to read the imports in the examples like this:

`import { A } from 'b'` ➡ `const { A } = require('b')`

```typescript
import { IgApiClient } from './index';
import { sample } from 'lodash';
const ig = new IgApiClient();
// You must generate device id's before login.
// Id's generated based on seed
// So if you pass the same value as first argument - the same id's are generated every time
ig.state.generateDevice(process.env.IG_USERNAME);
// Optionally you can setup proxy url
ig.state.proxyUrl = process.env.IG_PROXY;
(async () => {
  // Execute all requests prior to authorization in the real Android application
  // Not required but recommended
  await ig.simulate.preLoginFlow();
  const loggedInUser = await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
  // The same as preLoginFlow()
  // Optionally wrap it to process.nextTick so we dont need to wait ending of this bunch of requests
  process.nextTick(async () => await ig.simulate.postLoginFlow());
  // Create UserFeed instance to get loggedInUser's posts
  const userFeed = ig.feed.user(loggedInUser.pk);
  const myPostsFirstPage = await userFeed.items();
  // All the feeds are auto-paginated, so you just need to call .items() sequentially to get next page
  const myPostsSecondPage = await userFeed.items();
  await ig.media.like({
    // Like our first post from first page or first post from second page randomly
    mediaId: sample([myPostsFirstPage[0].id, myPostsSecondPage[0].id]),
    moduleInfo: {
      module_name: 'profile',
      user_id: loggedInUser.pk,
      username: loggedInUser.username,
    },
    d: sample([0, 1]),
  });
})();
```

# Basic concepts

## Feeds

Feed allows you to get data. Every feed is accessible via `ig.feed.feedName`. See [nice example](https://github.com/dilame/instagram-private-api/blob/master/examples/account-followers.feed.example.ts) and learn how to work with library feeds.

Available feeds key list:

`accountFollowers`, `accountFollowing`, `news`, `discover`, `pendingFriendships`, `blockedUsers`, `directInbox`, `directPending`, `directThread`, `user`, `tag`, `location`, `mediaComments`, `reelsMedia`, `reelsTray`, `timeline`, `musicTrending`, `musicSearch`, `musicGenre`, `musicMood`, `usertags`, `saved`

Most of the feeds requires initialization parameter, like user pk. Check [autogenerated docs](https://github.com/dilame/instagram-private-api/tree/master/docs), every feed doc link starts with `feeds/` and contains constructor with argument if needed.

## Repositories

Repositories implements low-level atomic operations. Any repository method must make at most one api-request. There is repository listing below, so you can get information about methods of each repository from our autogenerated docs.

Keys is a little hints, with it you will be able to get access to repository via `ig.key`.

| Key              | Repository class documentation                                                                                                                                          |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `account`        | [AccountRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_account_repository_.accountrepository.md)                    |
| `attribution`    | [AttributionRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_attribution_repository_.attributionrepository.md)        |
| `challenge`      | [ChallengeRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_challenge_repository_.challengerepository.md)              |
| `consent`        | [ConsentRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_consent_repository_.consentrepository.md)                    |
| `creatives`      | [CreativesRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_creatives_repository_.creativesrepository.md)              |
| `direct`         | [DirectRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_direct_repository_.directrepository.md)                       |
| `directThread`   | [DirectThreadRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_direct_thread_repository_.directthreadrepository.md)    |
| `discover`       | [DiscoverRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_discover_repository_.discoverrepository.md)                 |
| `fbsearch`       | [FbsearchRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_fbsearch_repository_.fbsearchrepository.md)                 |
| `friendship`     | [FriendshipRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_friendship_repository_.friendshiprepository.md)           |
| `launcher`       | [LauncherRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_launcher_repository_.launcherrepository.md)                 |
| `linkedAccount`  | [LinkedAccountRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_linked_account_repository_.linkedaccountrepository.md) |
| `live`           | [LiveRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_live_repository_.liverepository.md)                             |
| `location`       | [LocationRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_location_repository_.locationrepository.md)                 |
| `locationSearch` | [LocationSearch](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_location_search_repository_.locationsearch.md)                  |
| `loom`           | [LoomRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_loom_repository_.loomrepository.md)                             |
| `media`          | [MediaRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_media_repository_.mediarepository.md)                          |
| `music`          | [MusicRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_music_repository_.musicrepository.md)                          |
| `news`           | [NewsRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_news_repository_.newsrepository.md)                             |
| `qe`             | [QeRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_qe_repository_.qerepository.md)                                   |
| `qp`             | [QpRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_qp_repository_.qprepository.md)                                   |
| `tag`            | [TagRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_tag_repository_.tagrepository.md)                                |
| `upload`         | [UploadRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_upload_repository_.uploadrepository.md)                       |
| `user`           | [UserRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_user_repository_.userrepository.md)                             |
| `zr`             | [ZrRepository](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_repositories_zr_repository_.zrrepository.md)                                   |

## Services

Services will help you to maintain some actions without calling a couple repositority methods or perform complex things like pre and postlogin flow simulations or photo/video publishing.

| Key        | Service class documentation                                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `publish`  | [PublishService](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_services_publish_service_.publishservice.md)    |
| `search`   | [SearchService](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_services_search_service_.searchservice.md)       |
| `simulate` | [SimulateService](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_services_simulate_service_.simulateservice.md) |
| `story`    | [StoryService](https://github.com/dilame/instagram-private-api/blob/master/docs/classes/_services_story_service_.storyservice.md)          |

# Debugging

In order to get debug infos provided by the library, you can enable debugging.
The prefix for this library is `ig`.
To get all debug logs (_recommended_) set the namespace to `ig:*`.

#### Node

In node you only have to set the environment variable `DEBUG` to the desired namespace.
[Further information](https://github.com/visionmedia/debug#environment-variables)

#### Browser

In the browser you have to set `localStorage.debug` to the desired namespace.
[Further information](https://github.com/visionmedia/debug#browser-support)

# Contribution

If you need features that is not implemented - feel free to implement and create PRs!

Plus we need some documentation, so if you are good in it - you are welcome.

Setting up your environment is described [here](CONTRIBUTING.md).

# Useful links

[instagram-id-to-url-segment](https://www.npmjs.com/package/instagram-id-to-url-segment) - convert the image url fragment to the media ID

## Special thanks

- [Richard Hutta](https://github.com/huttarichard), original author of this library. Thanks to him for starting it.

## Thanks to contributors

- [Nerixyz](https://github.com/Nerixyz), for writing a huge amount of code for this library.
