Example usage

```js
const InstagramV1 = require('./client/v1')

async function main () {
    const device = new InstagramV1.Device('smmtooltest')
    const storage = new InstagramV1.CookieMemoryStorage()
    const session = await InstagramV1.Session.create(device, storage, 'login', 'pass');
    const feed = new InstagramV1.Feed.AccountFollowers(session, '1571836453', 100);

    /* Optionally you can redefine reducer. By default it looks like this : */
    feed.reduce = (accumulator, items) => accumulator.concat(items);
    /* If you dont need to store data at all, you can turn off reducer */
    feed.reduce = false;

    /* Also optionally you can redefine mapper. This is default implementation is like: */
    feed.map = item => item;
    /* If you only need ids of items, you can write.   */
    feed.map = item => item.id;

    feed.on('data', function (chunk) {
     // chunk is response of 1 request
    });
    feed.on('end', function (allResults) {
    // allResults is clued responses of all requests
    });

    const allResults = await feed.all(); // .all resurns promise
    return allResults;
}
main()
```

You can find more in source code.