var FastlyPurge = require("fastly-purge");

var FAKE_API_KEY = 'wadus';

var FAKE_PURGE_URL = 'http://example.com/image.jpg';

var fastlyPurge = new FastlyPurge(FAKE_API_KEY);

fastlyPurge.url(FAKE_PURGE_URL, callback);

function callback(err, result) {
    console.log(err, result);
}