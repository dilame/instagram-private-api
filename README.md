Instagram Private NODE.JS API 
===================
![logo](https://cloud.githubusercontent.com/assets/1809268/15931032/2792427e-2e56-11e6-831e-ffab238cc4a2.png)

![travis](https://travis-ci.org/huttarichard/instagram-private-api.svg)
[![npm](https://img.shields.io/npm/dm/instagram-private-api.svg?maxAge=600)](https://www.npmjs.com/package/instagram-private-api)
[![npm](https://img.shields.io/npm/l/instagram-private-api.svg?maxAge=600)](https://github.com/huttarichard/instagram-private-api/blob/master/LICENSE)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg?maxAge=600)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=huttarichard%40gmail%2ecom&lc=MQ&item_name=Github%20IG%20API&no_note=0&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)
[![Join the chat at https://gitter.im/instagram-private-api/Lobby](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/instagram-private-api/Lobby)

----

*Carefully consider using this library. I’m no longer maintaining the repository.*

Community is taking care of development and new features. Thanks to: @IvanMMM @SergeyMihrjakov @dilame @sebyddd @hieven

----

**Installation**


You can install this by using npm:
```
npm install instagram-private-api
```
----

**Do you like this project:**

Most of us are fighting with time, please support to give me more time to do more awesome features!

----

**What is this?** 

Since I had a lot of troubles with the official API (sandbox etc.). I decided to make a Node.JS api wrapper and to provide the code to others. 
It is an OOP api, and has a small coverage ... **I DO NOT USE THIS FOR SPAM**, hope you will not either. 

---

**What can you do with this API wrapper?** 

Pretty much anything that the Instagram PRIVATE API allows, except for some endpoints that you need to 
implement by yourself or make a pull request to the repository.

Features:
  - You can easily ask for any private endpoint with the `Request` and `WebRequest` classes
  - Session and device management
  - Follow / unfollow
  - Upload / delete medias (photos)
  - Like anything you like :P
  - Search & Iterate for Location, Users, Hashtags
  - Edit account profile
  - Resolve challenges (Captcha, Phone verification, Email verification)
  - Access media from many sources profile / location / hashtag
  - Access feeds for timeline or discovery
  - Create and manage new accounts  
  - Send direct messages or list direct messages in inbox
  - Much more ...

**How to use this (quick follow example)?** 


You need to obtain a session to access endpoints with the `Session` class:

```javascript
var Client = require('instagram-private-api').V1;
var device = new Client.Device('someuser');
var storage = new Client.CookieFileStorage(__dirname + './cookies/someuser.json');

// And go for login
Client.Session.create(device, storage, 'someuser', 'somepassword')
	.then(function(session) {
   		// Now you have a session, we can follow / unfollow, anything...
		// And we want to follow Instagram official profile
		return [session, Client.Account.searchForUser(session, 'instagram')]   
	})
	.spread(function(session, account) {
		return Client.Relationship.create(session, account.id);
	})
	.then(function(relationship) {
		console.log(relationship.params)
		// {followedBy: ... , following: ... }
		// Yey, you just followed @instagram
	})
```

---

**Request & WebRequest Classes**

> Nice! So you mentioned that we can hit any endpoint?

That is true. Every request going to Instagram is actually performed through the
Request & WebRequest classes. For the private endpoints used by Android or iPhone,
you can simply use the `Request` class, which will lead to the host `i.instagram.com`. For requests to `www.instagram.com` (web app), you can use
the `WebRequest` class. `WebRequest` is a child of `Request`;

Here is an example (how likes are actually implemented):

```javascript
return new Client.Request(session)
	.setMethod('POST')
	.setResource('like', {id: mediaId})
	.generateUUID()
	.setData({
		media_id: mediaId,
		src: "profile"
	})
	.signPayload()
	.send()
	.then(function(data) {
		return new Client.Like(session, {});
	})
```
> If you don't know how to find the media ID of an image, you might find this [link](https://stackoverflow.com/questions/16758316/where-do-i-find-the-instagram-media-id-of-a-image) helpful. There is an NPM [package](https://www.npmjs.com/package/instagram-id-to-url-segment) that convert the image url fragment to the media ID for you.  
**Let me make this clearer and explain it a little bit more in detail:**

The `Request` constructor accepts, as its first and only argument a class
which should be an instanceof `Session` class. `Session` class is the
glue between `Device` and `CookieStorage`. So if you create a session,
you can easily hit any endpoint without worrying about authentication 
or cookies management.

`.setResource(resource:string, params:Object)` 

is the method to setup the URL, which can be also interpreted as

`.setUrl(url:string)`

but the `setResource` method has a predefined list of endpoints, so you don't
need to construct the URL by yourself.

`.generateUUID()`

will generate a Device UUID, which is what every device does, but it's probably
not required. It is also available on `Device.prototype` as property `id`

`.setData(params:Object, override:boolean)`

will set data you want to send to the Instagram endpoint. With the `Request` class
you can set the body format of the request with method 

`.setBodyType(type:string)` 

choices used by instagram are `json`, `form`, `body`, `formData` (default).

`.signPayload()`

some endpoints require a signed payload. Under the hood the Instagram apps
actually have C++ libraries that are compiled into machine code. This means
it is not really easy to see the source of these libraries. This is a great 
way to not let developers see what is going on. And there is a library
called `libstrings.so`, that has methods to generate signatures for the JSON payload
you want to send to Instagram. Funny thing about that is, you need ARM based
processor to use these libraries, so you can sign requests but only on ARM based processors.

This actually gives us 2 choices. One is to start a (virtual) machine with
such processor and build some kind of bridge to communicate. The second is to find out how
`libstrings.so` is working and apply the same behavior in node (which would of course be better).

More about this interesting technique and how to extract keys and also a great
source of learning is here: [MKHDZNFQ Blog](https://mokhdzanifaeq.github.io/index.html)

Luckily for us, we know and we are able to analyze `libstrings.so` and thus
we have a clean implementation of signatures for Instagram.

Signatures are not required for all endpoints, but for all sensitive ones 
(likes / follow / directs / login), you will receive a `400 Bad Request` error, without signature.


Example of JSON payload to sign-in:

```
65eeaed09d7729f7aea06249c9fa33abd8a65a2a6514658f515346170b27c75b.{"_csrftoken":"missing","device_id":"android-85ee13e5ce740e2d","_uuid":"3c0755b3-a510-4a8e-8674-feb7219c2159","username":"xxxxxxxxxx","password":"xxxxxxxxx","login_attempt_count":0}
```

The first is the hash (signature), followed by dot and then the JSON payload.
The hash is actually created by HMAC encryption, in combination with an
encryption key called the `private key`.


`.send(options:Object)`

any other options you want to apply to request should be passed as the first
argument to the `.send` method;

`.then` is just promise library. Must be called after `.send`.
We are using [Bluebird library](http://bluebirdjs.com/docs/api-reference.html)
which is a really nice way to work with promises.

The `Request` and `Webrequest` classes are built on top of the Request.js library.
The `Webrequest` library can actually use same session. No need to create a new one.

> If you need to sniff traffic to see what your phone is doing and see the
> available endpoints I strongly recommend [Charles Debug Proxy](charlesproxy.com).
> Easiest combination for me is iPhone + Charles. iPhone allows you to redirect 
> all your traffic to your local machine and then you can inspect what is going
> on by putting Charles in middle. Traffic is encrypted by SSL, so you need
> to install Charles root certificate first.

---


**Session and cookies management:**

> So you said earlier there is a class gluing cookies and device, what?

The Session class is actually gluing any instance of `CookieStorage` and `Device` together. 
Every request to Instagram must be chained with proper headers and data,
in order to make endpoints work.
For example every endpoint requires a proper `User-Agent` header in
order to verify signature or `X-CSFR-Token` | `_csrftoken` to verify that you
are doing request intentionally.


**CookieStorage & CookieFileStorage & CookieMemoryStorage**

You can store cookies anywhere you want. Cookies are done with [tough-cookie](https://github.com/SalesforceEng/tough-cookie/).
Simple overview would be that, `CookieStorage` should have property
store, which should be child instance of `tough.Store` class.

For more info checkout this:

[tough.Store](https://github.com/SalesforceEng/tough-cookie/blob/master/lib/store.js) and
[internal class `CookieFileStorage`](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/cookie-file-storage.js)


```javascript
var storage = new Client.CookieFileStorage(__dirname + './cookies/someuser.json');
// or simply var storage = new Client.CookieMemoryStorage();
storage.getAccountId()
	.then(function(accountId){
		console.log(accountId);
		// will return actual userId from cookies
	})
```

**Session class**

You can create a new instance of Session by calling 
`var session = new Client.Session(device:Device, storage:CookieStorage)`

If you have valid cookies, you don't need to worry about anything else
if you don't, you need to create a session with storage and device.

static method 

`Session.create(device:Device, storage:CookieStorage, username:string, password:string, proxyUrl?:string)`

can help you with that. This method will sign-in and create a 
new Session instance.

`.getAccountId() : Promise<void|string>`

this method returns the account id from cookies

`.setProxy(proxyUrl:string)`

this will set proper proxy-url. More about this below.

`.getAccount() : Promise<Account>`

will return the account object associated with your session.


```javascript
// lets assume you got valid session
// var session = new Client.Session(device, storage)
session.getAccount()
  .then(function(account) {
	console.log(account.params)
	// {username: "...", ...}
  })
```
---

**Device class**

You can instantize new class, which will be able to represent it self as a device
you are using to access instagram. By default it will generate device
from list of devices (can be found at `client/v1/devices.json`).

Reason for username in arguments is that you need to have same device
for same user every time when you access instagram API. This is done through
correlated md5 username hash.

Also `Device` class is responsible for the `phone_id` property, which is often
sent with other data. It is responsible for generating a correlated `android-id`.

```
var device = new Client.Device('username');
device.md5 // will return md5 of your username
device.md5int // will return md5 integer representation of your device
device.info // will give you device model information
device.resolution // will give you resolution of device
device.dpi // will give you dpi of device
device.api // android API
device.release // android release

device.userAgent() // will return useragent for device 
```

`device.userAgent` method is very important for many reasons. One of them
is that without proper user agent there is no way how you can access signed endpoints.

---

**How to proxy every request:**


There are 2 choices to proxy requests:

Proxy URL has a standard format: 
 - Unauthenticated: `http(s)://yourhost.com/`
 - Authenticated: `http(s)://user:pass@yourhost.com/`

1) You can set a global proxy or default proxy by calling
`Client.Request.setProxy(proxyURL)`

2) Or if you are interested in one proxy per session
`session.proxyUrl = proxyURL` SAME AS `session.setProxy(proxyURL)`

If you use a combination of these two methods, the first one has lower priority, 
meaning that, if you set a global proxy, and then a session proxy, the session
proxy will be used.

Static `.create` method also accepts the proxy as last (optional parameter)

`Session.create(device, storage, username, password, proxyURL)`

---

**Resource classes:**

`InstagramResource` class is the base class for every resource.

From this class inherit:

[Account](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/account.js),
[Comment](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/comment.js),
[Hashtag](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/hashtag.js),
[Like](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/like.js),
[Location](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/location.js),
[Media](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/media.js),
[Relationship](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/relationship.js),
[Thread](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/thread.js),
[ThreadItem](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/thread-item.js),
[Upload](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/upload.js)


`InstagramResource` constructor accepts two arguments:

`new InstagramResource(session: Session, params: Object)`

This class is keeping the session and params of every resource class mentioned above.

Remember this example?

```javascript
// let's assume you got a valid session
// var session = new Client.Session(device, storage)
session.getAccount()
  .then(function(account) {
	console.log(account.params)
	// {username: "...", ...}
  })
```

`account.params` actually came from `InstagramResource`.

Account static `.getById` implementation as an example:

```javascript
Account.getById = function (session, id) {
    return new Request(session)
        .setMethod('GET')
        .setResource('userInfo', {id: id})
        .send()
        .then(function(data) {
			// data variable is a pure JSON object which will be parsed
			// by Account.prototype.parse and set as the top level property params 
            return new Account(session, data.user)
        })
};  

// Usage

Account.getById(session, '1234567')
	.then(function(account) {
		console.log(account.params);
		// {username: "...", ...}
		console.log(account.id);
		// only property which is exported as top level
		// property
	})

```


Another example would be upload:

```javascript
// JPEG is the only supported format now, pull request for any other format welcomed!
Client.Upload.photo(session, './path/to/your/jpeg.jpg')
	.then(function(upload) {
		// upload instanceof Client.Upload
		// nothing more than just keeping upload id
		console.log(upload.params.uploadId);
		return Client.Media.configurePhoto(session, upload.params.uploadId, 'akward caption');
	})
	.then(function(medium) {
		// we configure medium, it is now visible with caption
		console.log(medium.params)
	})
```

Video upload:
```javascript
// MP4 is the only supported format now, pull request for any other format welcomed!
Client.Upload.video(session, './path/to/your/video.mp4','./path/to/your/coverImg.jpg')
	.then(function(upload) {
		return Client.Media.configureVideo(session, upload.uploadId, 'akward caption', upload.durationms);
	})
	.then(function(medium) {
		// we configure medium, it is now visible with caption
		console.log(medium.params)
	})
```

Album upload:
```javascript
var medias = [
	{
        type: 'photo',
        size: [400, 400],
        data: './path/to/photo/photo.jpg'
    }, 
    {
        type: 'video',
        size: [720, 720],
        thumbnail: './path/to/video/thumbnail/thumbnail.jpg',
        data: './path/to/video/video.mp4'
    } // ... up to 10 media files (photo/video)
], disabledComments = true;

Client.Upload.album(session, medias)
    .then(function (payload) {
        Client.Media.configureAlbum(session, payload, 'akward caption', disabledComments)
    })
    .then(function () {
        // we configure album
    })    
```


---

**Feeds**

Feed is the class which implements functionality to iterate
through a list (which can be an infinite list) of data, like user media or 
hashtag media or locations.

Every feed implements the method `.get` to help you
go move the cursor and fetch items until you hit the bottom.

`cursor` is a sort of pagination for the API. Basically in every
request you will receive the next cursor for next request, which will
lead to another set of data for this specific feed.

Implemented are:
[AccountFollowers](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/account-followers.js),
[AccountFollowing](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/account-following.js),
[UserMedia](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/user-media.js),
[LocationMedia](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/location-media.js),
[TaggedMedia](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/tagged-media.js),
[MediaComments](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/media-comments.js),
[SelfLiked](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/self-liked.js),
[TimelineFeed](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/timeline-feed.js),
[Inbox](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/inbox.js),
[Thread](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/thread.js)

**Feed API is the same almost every time:**

`var feed = new Client.Feed.UserMedia(session:Session, ...extraArguments)`

Since feeds can be infinite and we cannot obviosly fetch all results, we need
to iterate. Every time you call `.get`, you will receive a new set of data
and set new `cursor`.

`feed.get() : Promise<Media[]>`

```javascript
var _ = require('lodash');
var Promise = require('bluebird');

var accountId = '123456'
var feed = new Client.Feed.UserMedia(session, accountId);

Promise.mapSeries(_.range(0, 20), function() {
	return feed.get();
})
.then(function(results) {
	// result should be Media[][]
	var media = _.flatten(results);
	var urls = _.map(media, function(medium) {
		return _.last(medium.images)
	});
	console.log(urls);
})
```

`feed.getCursor() : string`

will return the current `cursor`, which will be set after calling `.get`

`feed.setCursor() : void`

will set new `cursor`, from which you can start to iterate

`feed.isMoreAvailable() : Boolean`

returns a boolean indicating if there is more data to fetch.
Of course you can hit bottom and then there would be no other data to fetch.

Some feeds have more methods to make things easier. You can check them out.

---

**Account Creator**

`AccountCreator` and his children `AccountEmailCreator`, `AccountPhoneCreator`
are designed to create an account. To make account you want to probably use either
`AccountEmailCreator` or `AccountPhoneCreator`.
`AccountCreator` it self is just abstraction. 

Example of `AccountEmailCreator`:

```javascript
// Create empty session
var session = new Client.Session(device, storage);
new AccountEmailCreator(session)
	.setEmail('....@....')
	.setUsername('nickname')
	.setPassword('pwd')
	.setName('Name')
	.register()
	.spread(function(account, discover) {
		// account instanceof Client.Account
		console.log("Created Account", account)
		console.log("Discovery Feed", discover);
	})
```


Example of `AccountPhoneCreator`:

```javascript
// Create empty session
var session = new Client.Session(device, storage);
new AccountPhoneCreator(session)
	.setPhone('phone number ie 111222333')
	.setUsername('nickname')
	.setPassword('pwd')
	.setName('Name')
	.setPhoneCallback(function() {
		// This will be called in order to 
		// supply verification code, must return promise
		// with actual value
		return Promise.resolve("123456")
	})
	.register()
	.spread(function(account, discover) {
		// account instanceof Client.Account
		console.log("Created Account", account)
		console.log("Discovery Feed", discover);
	})
```

Serval exceptions can be raised. 
  - `InvalidEmail` if you dont supply valid email
  - `InvalidUsername` if you dont have valid username
  - `InvalidPhone` for invalid phone number
  - `InvalidPassword` is you password is for example too short
  - `AccountRegistrationError` when instagram denied your code or registrion
  - `AuthenticationError` when account is created but you did not successfuly log in

If you tried too much for you testing purposes you can supply proxy to
session. Check the "How to proxy every request" section.

---

**Challenges**

The `Challenge` class and its children are a way to somehow respond to 
Instagram verification requests. Let me tell you this first: **I hope you will
not spam Instagram, because they are providing a really great service
and this repo should just be used for easier access to their API**... Anyway
Instagram is really freaking smart and aggressive about getting you banned for 
any malicious activity, so be careful Icarus and don't spam.

In case you don't have any malicious intentions and you get into a situation
that requires you to verify via mail or phone you can use the challenge classes to automate
this process.

Example first:

```javascript
// var device, storage, user, password;
// you get those from previous examples

function challengeMe(error){
	return Client.Web.Challenge.resolve(error,'phone')
		.then(function(challenge){
			// challenge instanceof Client.Web.Challenge
			console.log(challenge.type);
			// can be phone or email
			// let's assume we got phone
			if(challenge.type !== 'phone') return;
			//Let's check if we need to submit/change our phone number
			return challenge.phone('79876543210')
				.then(function(){return challenge});
		})
		.then(function(challenge){
			// Ok we got to the next step, the response code expected by Instagram
			return challenge.code('123456');
		})
		.then(function(challenge){
			// And we got the account confirmed!
			// so let's login again
			return loginAndFollow(device, storage, user, password);
		})
}


function loginAndFollow(device, storage, user, password) {
	return Client.Session.create(device, storage, user, password)
		.then(function(session) {
			// Now you have a session, we can follow / unfollow, anything...
			// And we want to follow Instagram official profile
			return [session, Client.Account.searchForUser(session, 'instagram')]   
		})
		.spread(function(session, account) {
			return Client.Relationship.create(session, account.id);
		})
}


loginAndFollow(device, storage, user, password)
	.catch(Client.Exceptions.CheckpointError, function(error){
		// Ok now we know that Instagram is asking us to
		// prove that we are real users
		return challengeMe(error);
	}) 
	.then(function(relationship) {
		console.log(relationship.params)
		// {followedBy: ... , following: ... }
		// Yey, you just followed an account
	});
```

More common for such a situation is [PhoneVerification](https://github.com/huttarichard/instagram-private-api/tree/master/client/v1/web/challenge.js#L44).
Of course there are services like textnow.com and others which will provide
an API to let you receive Instagram SMS messages!


---

**Similar repository:**

[https://github.com/mgp25/Instagram-API](https://github.com/mgp25/Instagram-API)

---

**End User License Agreement (EULA)**

  1) *You will not use* this repository for sending mass spam or any other malicious activity
  2) *We / You will not support* anyone who is violating this EULA conditions
  3) *Repository is just for learning / personal purposes* thus should not be part of any 
  	service available on the Internet that is trying to do any malicious activity (mass bulk request, spam etc.)
