'use strict';
const http = require('http');

const server = http
  .createServer((req, res) => {
    res.end('hi');
  })
  .on('error', (error) => {
    console.error('Server Error', error);
  })
  .on('clientError', (error) => {
    console.error('Client Error', error);
  });

const port = 8000;
server.listen(port, () => {
  console.info(`Listening on ${port}`);
});
