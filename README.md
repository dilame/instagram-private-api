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

This package uses [`url-regex-safe`](https://www.npmjs.com/package/url-regex-safe) ([GitHub](https://github.com/spamscanner/url-regex-safe)) to check for links when sending direct messages.
By default, the **safe** regex engine [`re2`](https://github.com/uhop/node-re2) is **not** installed.
⚠ It's highly recommended for you to install `re2` by running `npm install re2`, else you _will_ be vulnerable to [CVE-2020-7661](https://nvd.nist.gov/vuln/detail/CVE-2020-7661).

# Support us

If you find this library useful for you, you can support it by donating any amount

BTC: 1Dqnz9QuswAvD3t7Jsw7LhwprR6HAWprW6

# Examples

You can find usage examples [here](examples).

_Note for JavaScript users:_
As of Node v.13.5.0, there isn't support for ESModules and the 'import'-syntax.
So you have to read the imports in the examples like this:

`import { A } from 'b'` ➡ `const { A } = require('b')`

```typescript
import { IgApiClient } from 'instagram-private-api';
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

**You can find documentation in the [`docs` folder](docs)**.
Consider starting in [`IgApiClient` (`index` module)](docs/classes/index/IgApiClient.md), the root class.

You'll often see `ig` in the docs.
This just refers to the client, an instance of [`IgApiClient`](docs/classes/index/IgApiClient.md) holding the state for one user.

```typescript
import { IgApiClient } from 'instagram-private-api';

// This is the general convention on how to name the client
//    vv
const ig = new IgApiClient();

// login, load a session etc.
```

## Repositories

Repositories implement low-level operations - every method sends exactly _one_ api-request.

- See the list of **available repositories** [here](docs/modules/repositories.md).
- See the list of **their keys** in [`IgApiClient` here](docs/classes/index/IgApiClient.md).

You access repositories on the [client (`IgApiClient`)](docs/classes/index/IgApiClient.md) by their lower-case (_camelCase_) name without the `Repository` suffix.
For example, you access the instance of [`AddressBookRepository`](docs/classes/repositories/AddressBookRepository.md) by [`ig.addressBook`](docs/classes/index/IgApiClient.md#addressbook).

## Feeds

Feeds represent paginated endpoints like a user's feed ([`UserFeed`](docs/classes/index/FeedFactory.md#user)).
Think of feeds like (async-)iterators/streams/observables (in fact feeds are [async iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) and observable (`feed.item$`)).
Every feed is accessible via `ig.feed.feedName()` (_camelCase_ name). `ig.feed` is the [`FeedFactory`](docs/classes/index/FeedFactory.md) that creates feeds for you connected to the instance of `ig`.

- See the list of **available feeds** [here](docs/modules/feeds.md).
- See the list of **their keys** in [`FeedFactory` (`ig.feed`) here](docs/classes/index/FeedFactory.md).
- See [this example](examples/account-followers.feed.example.ts) and learn how to work with library feeds.

Most of the feeds require initialization parameter(s), like a user-pk (id).

## Services

Services will help you to maintain some actions without calling a couple repository methods or perform complex things like pre and postlogin flow simulations or photo/video publishing.

- See the list of **available repositories** [here](docs/modules/services.md).
- See the list of **their keys** in [`IgApiClient` here](docs/classes/index/IgApiClient.md).

# Debugging

In order to get debug infos provided by the library, you can enable debugging.
The prefix for this library is `ig`.
To get all debug logs (_recommended_) set the namespace to `ig:*`.

#### Node

In Node you only have to set the environment variable `DEBUG` to the desired namespace.
[Further information](https://github.com/visionmedia/debug#environment-variables)

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
