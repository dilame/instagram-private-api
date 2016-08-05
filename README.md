Instagram Private NODE.JS API 
===================
![logo](https://cloud.githubusercontent.com/assets/1809268/15931032/2792427e-2e56-11e6-831e-ffab238cc4a2.png)


![travis](https://travis-ci.org/huttarichard/instagram-private-api.svg)
![Mit License](https://camo.githubusercontent.com/089daf756ab3a48c94f6938bde7cf85125183ea3/68747470733a2f2f706f7365722e707567782e6f72672f6d677032352f696e7374616772616d2d7068702f6c6963656e7365)
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=huttarichard%40gmail%2ecom&lc=MQ&item_name=Github%20IG%20API&no_note=0&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

----

**Installation**


You can install this by using npm:
```
npm install instagram-private-api
```
----

**Do you like this project:**

Most of us fighting with time, plase support to give me more time to do more awesome features!

----

**What is this?** 

Since I had lot of troubles with official API (sandbox etc.) I decided to make Node.JS api wrapper and provide code to others. 
It is OOP api, and have a small coverage ... **I DO NOT USE THIS FOR SPAM**, hope you will not too. 

---

**What you can do with this API wrapper?** 

On the bottom line, anything that instagram PRIVATE API allows, execpt some endpoint you need to 
implement by yourself or made a pull request to repository.

Features:
  - You can easily ask for any private endpoint with `Request` and `WebRequest` class
  - Session and device managment
  - Do follow / unfollow
  - Upload / delete media (photos)
  - Like anything you like :P
  - Search & Iterate for Location, Users, Hashtags
  - Edit account profile
  - Resolve challanges (Captcha, Phone verification, Email verification)
  - Access media on from many sources profile / location / hashtag
  - Aceess feeds for timeline or discovery
  - Create and manage new accounts  
  - Send directs or list directs in inbox
  - Much more ...

**How to use this (quick follow example)?** 


You need to obtain session for accessing endpoints with `Session` class:

```javascript
var Client = require('instagram-private-api').V1;
var device = new Client.Device('SAMSUNG_GALAXY_S2', 'someuser');
var storage = new Client.CookieFileStorage(__dirname + './cookies/someuser.json');

// And go for login
Client.Session.create(device, storage, 'someuser', 'somepassword')
	.then(function(session) {
   		// Now you have session, we can do follow / unfollow, anything...
		// And we want to follow instagram official profile
		return [session, Client.Account.searchForUser(session, 'instagram')]   
	})
	.spread(function(session, account) {
		return Client.Relationship.create(session, account.id);
	})
	.then(function(relationship) {
		console.log(relationship.params)
		// {followedBy: ... , following: ... }
		// Yey, you just made an follow
	})
```

---

**Request & WebRequest Class**

> Nice! So you mentioned that we can hit any endpoint?

That is true. Every request going to the instagram is actually done through
Request & WebRequest class. For private endpoints used by android or iphone
you can simply ask `Request` class, this will lead to host `i.instagram.com`
where is a private API. For requests to `www.instagram.com` (web app) you can use
`WebRequest` class. `WebRequest` is a child of `Request`;

Here is an example (how likes are actually implemented):

```javascript
return new Request(session)
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
		return new Like(session, {});
	})
```
Let make this clear and unfold it little bit:

`Request` constructor accepting as a first and only argument a class
which should be an instanceof `Session` class. `Session` class is a
glue between `Device` and `CookieStorage`. So if you create a session
(which is actually needs device and storage) you can easily hit
any endpoint without worring about authentication or cookies managment.

`.setResource(resource:string, params:Object)` 

is method for setting up url which can be also interpreted as

`.setUrl(url:string)`

but `setResource` method is predefined list of endpoints so you don't
need to construct url by your self.

`.generateUUID()`

will generate Device UUID wich is what every device do, but probably
not required. Also avaiable on `Device.prototype` as property `id`

`.setData(params:Object, override:boolean)`

will set data you want to send to the Instagram endpoint. With request class
you can set the format of request with method `.setBodyType(type:string)` choices
used by instagram are `json`, `form`, `formData` (default).

`.signPayload()`

some endpoints require a signed payload. Under the hood instagram apps
actually have c++ libraries which are compiled in to machine code. Meaing
it is not really easy to see source of these libraries. It is a great 
way how to not let developers see what is going on. And there is a library
called `libstrings.so` having methods to generate signature for JSON payload
you want to send to instagram. That way you cannot send instagram request
without this signature (not required for all endpoints), otherwise you 
will receive `400` Bad Request.

Example of JSON payload to sign-in:

```
65eeaed09d7729f7aea06249c9fa33abd8a65a2a6514658f515346170b27c75b.{"_csrftoken":"missing","device_id":"android-85ee13e5ce740e2d","_uuid":"3c0755b3-a510-4a8e-8674-feb7219c2159","username":"xxxxxxxxxx","password":"xxxxxxxxx","login_attempt_count":0}
```

JSON payload is behind the dot and hash before is signature generated by 
`libstrings.so` library. `libstrings.so` has string in there called `private kEY` and hmac 
encryption library to sign payload using the `private key`.

More about this interesting technique and how to exploit keys and also great
source of learning is here: [MKHDZNFQ Blog](http://mokhdzanifaeq.github.io/)

`send(options:Object)`

any other options you want to do with request should be passed as first
argument to `.send` method;

`.then` is just promise library. We are using [Bluebird library](bluebirdjs.com/docs/api-reference.html)
 which is a really nice way how to work with promises.

`Request` and `Webrequest` class is build on top of Request.js library.
`Webrequest` library can actually use session create by your phone.

So you can create Session for device and ask any endpoint on available 
by Instagram Web app.

> If you need to sniff traffic to see what is your phone doing and see 
> avaiable endpoints I strongly recommand [Charles Debug Proxy](charlesproxy.com)
> easiest combination is IPhone + Charles, since iPhone let you see
> what is going on just by setting proxy to your local machine (aka 
> redirect traffic to charles proxy)

---


**Session and cookies managment:**

> So you said erlier there is a class gluing cookies and device, what?

Session class is actually gluing any `CookieStorage` and `Device` together. 
Every request to instagram can be chain with proper headers and data
you need to send first in order to get endpoint working.
For example every endpoint require proper `User-Agent` header in
order to verify signature or `CSFR token` to verify that you
are doing request intentionally.

*So first, show time for class `Device`*:

Device class is responsible for `device_id` property wich is often
send with other data. It is responsible for generating `android-id`.

```javascript
// Available phones are SAMSUNG_GALAXY_S2, GOOGLE_NEXUS_7, XIAOMI_ARMANI
// IG username is required due to correlated andorid id for every user
var device = new Client.Device('SAMSUNG_GALAXY_S2', 'instagram.username')
console.log(device.id) 
//->  andorid-xxxxxxxxxx
console.log(device.userAgent('18'))
//-> User-Agent: Instagram 9.0.0 Android (18/4.4.4; 240dpi; 480x800; Samsung Galaxy S2 - 4.4.4 - API 21 - 480x800; en_US)
```

*CookieStorage & CookieFileStorage*

You can store cookies anywhere you want. Cookies are done with [tough-cookie](https://github.com/SalesforceEng/tough-cookie/).
Simple overview whould be that, `CookieStorage` should have property
store which should be child instance of `tough.Store` class.

For more info checkout this:

[tough.Store](https://github.com/SalesforceEng/tough-cookie/blob/master/lib/store.js),

[internal class `CookieFileStorage`](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/cookie-file-storage.js)


```javascript
var storage = new Client.CookieFileStorage(__dirname + './cookies/someuser.json');
storage.getAccountId()
	.then(function(accountId){
		console.log(accountId);
		// will return actuall userId from cookies
	})
```

*Finally Session class*

You can create new instance of Session by calling 
`var session = new Session(storeage:CookieStorage, device:Device)`

If you have valid cookies you dont need to worry about anyting else
if you not you need to create session with storage and device.

static `Session.create(device:Device, storeage:CookieStorage, username:string, password:string, proxyUrl?:string)`
can help you with that. This method will sign in and create a 
new instance session session.

`.getAccountId() : Promise<void|string>`

this medhod can return id from cookies


`.setProxy(proxyUrl:string)`

more about this bellow.

`.getAccount() : : Promise<Account>`

will ask for account object associated with your session.


```javascript
// lets assume you got valid session
var session = new Client.Session(Client.Device.getRandom())
session.getAccount()
  .then(function(account) {
	console.log(account.params)
	// {username: "...", ...}
  })
```
---

**How to proxy every request:**


There are 2 choices of how to proxy requests:

Poroxy URL has a standart format: 
 - Unauthenticated: `http(s)://yourhost.com/`
 - Authenticated: `http(s)://user:pass@yourhost.com/`

1) You can set global proxy or default proxy by calling
`Client.Request.setProxy(proxyURL)`

2) Or If you interested one proxy per session
`session.proxyUrl = proxyURL` SAME AS `session.setProxy(proxyURL)`

If you use combination of these two methods first way has lower priority, 
meaning if you set global proxy, and then session proxy, session proxy will be prefered.

Static `.create` method also accept the proxy as last (optional parametr)
`Session.create(device, storage, username, password, proxyURL)`

---

**Resource classes:**

`InstagramResource` class is base class for every resource.

From this class inherits:

[Account](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/account.js),
[Comment](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/comment.js),
[Hashtag](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/hashtag.js),
[Like](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/like.js),
[Locatio](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/location.js),
[Media](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/media.js),
[Relationship](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/relationship.js),
[Thread](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/thread.js),
[ThreadItem](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/thread-item.js),
[Upload](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/upload.js)


`InstagramResource` constructor accepts two arguments:


`new InstagramResource(session: Session, params: Object)`

This class is keeping session and params of every resource class mentioned above.

Remember this example?

```javascript
// lets assume you got valid session
var session = new Client.Session(Client.Device.getRandom())
session.getAccount()
  .then(function(account) {
	console.log(account.params)
	// {username: "...", ...}
  })
```

`account.params` actually came from `InstagramResource`

So now, you now that for example Account accepts in constructor
session, params and rest of API, you can explore by yourself.

*Example to prove (account static `.getById` implementation):*

```javascript
Account.getById = function (session, id) {
    return new Request(session)
        .setMethod('GET')
        .setResource('userInfo', {id: id})
        .send()
        .then(function(data) {
			// data is pure json object which will be parsed
			// by Account.prototype.parse and set as params 
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


*Upload example*

```javascript
// Only supported format now, pull request for any other format
// or video welcomed!
Upload.photo(session, './path/to/your/jpeg.jpg')
	.then(function(upload) {
		// upload instanceof Client.Upload
		// nothing more then just keeping upload id
		console.log(upload.params.uploadId);
		//session, uploadId, caption, width, height
		return Media.configurePhoto(session, upload.params.uploadId, 'akward caption');
	})
	.then(function(medium) {
		// we configure medium it is now visible with caption
		console.log(medium.params)
	})
```

---

**Feeds**

Feed is class which implements functionality to iterate
through list (which can be infinite list) of data, like user media or 
hashtag media or locations.

Every feed implement method `.get` to help you
go through cursor and fetch items until you hit a bottom.

`cursor` is sort of pagination for API. Bascially in every
request you will receive a next cursor for next request, which will
lead to another dose of data for specific feed.

Implemented are:
[AccountSearch](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/account-search.js),
[HashtagSearch](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/hashtag-search.js),
[LocationSearch](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/location-search.js),
[AccountFollowers](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/account-followers.js),
[AccountFollowing](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/account-following.js),
[UserMedia](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/user-media.js),
[LocationMedia](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/location-media.js),
[TagMedia](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/tag-media.js),
[SelfLiked](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/self-liked.js),
[TimelineFeed](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/timeline-feed.js),
[Inbox](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/inbox.js),
[InboxPending](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/inbox-pending.js),
[Thread](https://github.com/huttarichard/instagram-private-api/blob/master/client/v1/feeds/thread.js)

*Feed API is almost every time same:*

One or more arguments in for every feed constructor:

`var feed = new Client.Feed.UserMedia(session:Session, ...extraArguments)`

Since feeds can be infinite and we cannot obviosly fetch all results we need
to iterate. Every time you call `.get` you will receive a new dose od data.

`feed.get() : Promise<Media[]>`

```javascript
var _ = require('underscore');
var Promise = require('bluebird');

var accountId = '123456'
var feed = new Client.Feed.UserMedia(session, accountId);

Promise.map(_.range(0, 20), function() {
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

`feed.getMaxId() : Promise<Media[]>`

will return current `cursor` this will be set after calling `.get`

`feed.setMaxId() : Promise<Media[]>`

will set new `cursor` from you can start iterate

`feed.isMoreAvailable() : Boolean`

return a boolean indicating if there is more media to fetch

Some feeds have more methods to make things easier.

---

**Challanges**

Challange and her childs are way to somehow win competion with 
instagram about verification. Let me tell you first *I hope you will
not spam on instagram, because their are providing really great service
and this repo should be just for easier access to their API*, anyway
Instagram is really friking smart about getting you banned for 
malicious activity, so carful Icarus.

But if you have not malicious intentions and you will get into situation
that you need to verify mail, phone or do a captcha (not implemented due
to missing account for testing) you can use challange classes to automate
this process.

Example first:

```javascript
// var device, storage, user, password;
// you get those from previous examples

function challengeMe(error) {
	return Client.Web.Challange.resolve(error)
		.then(function(challenge) {
			// challenge instanceof Client.Web.Challange
			console.log(challenge.type);
			// can be phone, email, or captcha
			// let assume we got email
			if(!challenge.type !== 'email') return;
			// Will send request to send email to you
			// email will be one associated with your account
			return challenge.email();
		})
		.then(function(challenge) {
			// Ok we got next step, instagram expection code
			return challenge.code('123456');
		})
		.then(function(challenge) {
			// Yey instagram accept code
			// now we confirm that instagram is happy, wierd :P
			return challenge.confirm()
		})
		.then(function(challenge) {
			// And we got account confirmed!
			// so let make this login again
			return loginAndFollow(device, storage, user, password);
		})

}


function loginAndFollow(device, storage, user, password) {
	return Client.Session.create(device, storage, user, password)
		.then(function(session) {
			// Now you have session, we can do follow / unfollow, anything...
			// And we want to follow instagram official profile
			return [session, Client.Account.searchForUser(session, 'instagram')]   
		})
		.spread(function(session, account) {
			return Client.Relationship.create(session, account.id);
		})
}


loginAndFollow(device, storage, user, password)
	.catch(Client.Exceptions.CheckpointError, function(error){
		// Ok now we know that instagram asking us to
		// prove that we are real users
		return challengeMe(error);
	}) 
	.then(function(relationship) {
		console.log(relationship.params)
		// {followedBy: ... , following: ... }
		// Yey, you just made an follow
	});
```

Mor common for such a situation is [PhoneVerification](https://github.com/huttarichard/instagram-private-api/tree/master/client/v1/web/challange.js#L44).
Of course there are services like textnow or others which will provide
an API to let you receive instagram sms messages!


**Proxy server:**

I create another repsitory, which implements functionality of this wrapper into very simple
express app. It is a webserver with API, which can do many stuff as private API does, execept it 
is probably much easier to read and manupulate with.

https://github.com/huttarichard/instagram-private-api-proxy



**Credit:**

Who deserves most ...  @mgp25 & @markmhn for decrypting private keys from c++ libraries bundled within android app.
