require('babel-polyfill');
require('babel-register')({
  presets: ['react', 'env', 'stage-2'],
});

require('./server');
