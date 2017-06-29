require('./getUrl').start(function(purge) {
  console.log(`url requested: ${purge}`);

  var FastlyPurge = require("fastly-purge");

  var API_KEY = 'API_KEY';

  var PURGE_URL = purge;

  var fastlyPurge = new FastlyPurge(API_KEY);

  fastlyPurge.url(PURGE_URL, callback);

  function callback(err, result) {
      console.log(err, result);
  }
});