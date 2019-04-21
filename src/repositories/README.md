Repositories implements low-level atomic operations. Any repository method must make at most one api-request.
Sometimes it's not enough to make something useful by just one request.
For example - you must make at least 2 requests on order to publish a post -
first one to upload a file and second one to publish post with uploadId from first request.
In that case you need to implement 2 methods in repositories - `upload.photo` and `media.configure`.
And then implement `publish` service with `photo` method, that just calls `upload.photo()` and `media.configure()`
in right sequence.
