const http = require('http');
const ecstatic = require('ecstatic');

const port = process.env.PORT || 3000;

http.createServer(
  ecstatic({ root: __dirname + '/dist' })
).listen(port);

console.log('Listening on ' + port + '.');