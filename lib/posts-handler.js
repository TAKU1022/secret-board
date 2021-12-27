'use strict';

const handle = (req, res) => {
  switch (req.method) {
    case 'GET':
      res.end('hi');
      break;
    case 'POST':
      break;
    default:
      break;
  }
};

module.exports = {
  handle,
};
