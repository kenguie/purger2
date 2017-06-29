# Fastly Purge using an api key
Fastly

This is a basic url purger that prompts you for the url you want to purge on fastly.

Once you provide the url, it will output the request as verification it was taken in and then give you a status.

This requires an API key in the file fastlyPurge.js.

Hope it makes life easier for everyone!

Thanks!

Addendum: 
This is only my second package, haven't gotten it totally right yet, but in order to make this work, the js files needed to run are inside node_modules.
You need to copy them out of node_modules/fastly-purge-api-w-prompt up a directory.
After that, run npm install and place the API key in fastlyPurge.js.

Run with node fastlyPurge
