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

Since I had lot of troubles with official API (sandbox etc.) I decided to make Node.JS api and provide code to others. It is OOP api, and have a coverage ... **I DO NOT USE THIS FOR SPAM**, hope you will not too. 


**Credit:**

Who deserves most ...  @mgp25 & @markmhn for decrypting private keys from c++ libraries bundled within android app.


**How to use this?** 

First you need to gain session:

```javascript
var Client = require('instagram-private-api').Client.V1;
var device = new Client.Device('SAMSUNG_GALAXY_S2', 'someuser');
var cookiePath = __dirname + './cookies/someuser.json';
// Either gain already gained session
var session = new Client.Session(device, cookiePath);
// Or go for login
var promise = Client.Session.create(device, cookiePath, 'someuser', 'somepassword');

promise.then(function(sessionInstance) {
   // Now you have session, do what ever private API allows
});
```


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



**Working with 'proxy like' server:**

You can use bundled proxy server (for example if you want to use this as server for client).

```javascript
var server = require('instagram-private-api').ProxyServer;

server.run({
    port: 8080,
    socketPort: 8888,
    host: "0.0.0.0",
    databaseDir: './databases',
    cookiesDir: './cookies',
    // to use proxy with proxy heh :P
    // proxy: 'http://127.0.0.1:8888',
    // if you want to bing this to multiple interfaces
    // interfaces: '10.0.0.2', 
    // for testing
    // suppressLog: true
})
```


This will run server and socket server on address 0.0.0.0:8080 so you can access and do the same what you can do with instagram PRIVATE API. Except it is 
prettier :P.


```
GET /v1
-> {node: true, sessions: <Number>}

POST /v1/sessions
With application/json
Data {"username": "someone", password: "somepassword"}
-> {user: {...}, key: "some-key-in-md5-format"}

GET /v1/accounts/self?key=some-key-in-md5-format
-> {username: "..." ...}
```

**Proxy Client API**

And finally you can use an Node.JS proxy API same way you use `Client.V1`


```javascript
var ClientProxy = require('instagram-private-api').ProxyClient.V1;
var server = new ClientProxy.Server('host', 'port', 'socket port');
var session = new ClientProxy.Session(server)
session.create('some instagram username', 'somepass')
	.then(function(sessionProxyInstance) {
		// accountProxyInstance instanceof ClientProxy.Session -> true
		// accountProxyInstance instanceof ClientProxy.Resource -> true
		return Account.self(sessionProxyInstance);
	})
	.then(function(accountProxyInstance) {
		// accountProxyInstance instanceof ClientProxy.Account -> true
		// accountProxyInstance instanceof ClientProxy.Resource -> true
		console.log(accountProxyInstance.params) 
		// -> {username: "..." ...}
	})
```


Thanks for any support! Pull requests are of course welcome!


