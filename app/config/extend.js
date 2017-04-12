const view = require('think-view');
const createI18n = require('think-i18n');
const path = require('path');

var regCn = /^cn.*$/;
var regEn = /^en.*$/;
module.exports = [
  view, //make application support view
  createI18n({
    i18nFolder: path.resolve(__dirname, '../i18n'),
    defaultLocale: 'cn',
    localesMapping(locales) {
      for(l of locales) {
        if(l.match(regCn)) {
          return 'cn';
        }
        if(l.match(regEn)) {
          return 'en';
        }
      }
      // default
      return 'cn';
    },
    // debugLocale: 'cn'
  })
];