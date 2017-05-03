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
    getLocale: {by: 'query', name: 'locale'},
    localesMapping(locales) {
      for(l of locales) {
        if(regCn.test(l)) {
          return 'cn';
        }
        if(regEn.test(l)) {
          return 'en';
        }
      }
      // default
      return 'cn';
    },
    // debugLocale: 'cn'
  })
];