'use strict';

const handleLogout = (req, res) => {
  res.writeHead(401, {
    'Content-Type': 'text/plain; charset=utf-8',
  });
  res.end('ログアウトしました');
};

const handleNotFound = (req, res) => {
  res.writeHead(404, {
    'Content-Type': 'text/plain; charset=utf-8',
  });
  res.end('ページがみつかりません');
};

module.exports = {
  handleLogout,
  handleNotFound,
};
