const Application = require('thinkjs');
const watcher = require('think-watcher');
const notifier = require('node-notifier');

const instance = new Application({
  ROOT_PATH: __dirname,
  env: 'development'
});

instance.run();