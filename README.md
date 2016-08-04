INSTAGRAM PRIVATE NODE.JS API 
===================
![logo](https://cloud.githubusercontent.com/assets/1809268/15931032/2792427e-2e56-11e6-831e-ffab238cc4a2.png)
![travis](https://travis-ci.org/huttarichard/instagram-private-api.svg)

**Installation**


You can install this by using npm:
```
npm install instagram-private-api
```

**What is this?** 

Since I had lot of troubles with official API (sandbox etc.) I decided to make Node.JS api and provide code to others. 
It is OOP api, and have a coverage ... **I DO NOT USE THIS FOR SPAM**, hope you will not too. 


**How to use this?** 


First you need to gain session:

```javascript
var Client = require('instagram-private-api').V1;
var device = new Client.Device('SAMSUNG_GALAXY_S2', 'someuser');
var storage = new Client.CookieFileStorage(__dirname + './cookies/someuser.json');

// And go for login
var promise = Client.Session.create(device, storage, 'someuser', 'somepassword');

promise.then(function(sessionInstance) {
   // Now you have session, do what ever private API allows
});
```


**How to proxy every request:**


There are 2 choices of how to proxy requests:

Poroxy URL has standart format: 
 - Unauthenticated: `http(s)://yourhost.com/`
 - Authenticated: `http(s)://user:pass@yourhost.com/`
 - 
1) You can set global proxy or default proxy by calling
`Client.Request.setProxy(proxyURL)`

2) Or If you interested one proxy per session
`session.proxyUrl = proxyURL` SAME AS `session.setProxy(proxyURL)`

If you use combination of these two methods first way has lower priority, 
meaning if you set global proxy, and then session proxy, session proxy will be prefered.

Static `.create` method also accept the proxy as last (optional parametr);
`Session.create(device, storage, username, password, proxyURL)`


**Available APIs:**

You can start by taking look on:
https://github.com/huttarichard/instagram-private-api/blob/master/client/v1.js

Every class in namespace client/v1 usually takes one or more arguments, but in most of cases the first one is always session:

```javascript
// Session Instance gained above
var session = .... 
// Lets find account
Client.Account.searchForUser(session, 'instagram')
	.then(function(accountInstance) {
		// accountInstance instanceof Client.Account -> true
		// accountInstance instanceof Client.Resource -> true
		console.log(accountInstance.id)
		// -> 1213.....
		console.log(accountInstance.params)
		// -> {username: 'instagram', picture: ....}
		
	})

```

You can explore more by yourself, or if you are not busy, pull request (for doc or anything else) welcome :)



**Proxy server:**

I create another repsitory, which implements functionality of this wrapper into very simple
express app. It is a webserver with API, which can do many stuff as private API does, execept it 
is probably much easier to read and manupulate with.

https://github.com/huttarichard/instagram-private-api-proxy



**Credit:**

Who deserves most ...  @mgp25 & @markmhn for decrypting private keys from c++ libraries bundled within android app.
