'use strict';
const pug = require('pug');
const util = require('./handler-util');
const Post = require('./post');
const contents = [];

const handleRedirectPosts = (req, res) => {
  res.writeHead(303, {
    Location: '/posts',
  });
  res.end();
};

const handle = (req, res) => {
  switch (req.method) {
    case 'GET':
      res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
      });
      res.end(pug.renderFile('./views/posts.pug', { contents }));
      break;
    case 'POST':
      let body = [];
      req
        .on('data', (chunk) => {
          body.push(chunk);
        })
        .on('end', () => {
          body = Buffer.concat(body).toString();
          const params = new URLSearchParams(body);
          const content = params.get('content');
          console.info(`投稿されました: ${content}`);
          contents.push(content);
          console.info(`投稿された全内容: ${contents}`);
          Post.create({
            content,
            trackingCookie: null,
            postedBy: req.user,
          }).then(() => {
            handleRedirectPosts(req, res);
          });
        });
      break;
    default:
      util.handleBadRequest(req, res);
      break;
  }
};

module.exports = {
  handle,
};
