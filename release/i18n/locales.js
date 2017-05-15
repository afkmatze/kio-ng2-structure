var locale2 = require('locale2');
import * as constants from './constants';
export var supportedLocales = [
    constants.en_US,
    constants.de_DE
];
export var defaultLocale = constants.de_DE;
export var current = constants.de_DE;
export var matchLocale = function (locale) {
    var exactIdx = supportedLocales.indexOf(locale);
    if (exactIdx > -1) {
        current = locale;
    }
    else {
        current = supportedLocales.find(function (supportedLocale) { return supportedLocale.indexOf(locale.toLowerCase()) > -1; }) || defaultLocale;
    }
    return current;
};
export var browserLocale = matchLocale(locale2);
export var shortenLocale = function (locale) { return locale.slice(0, 2).toLowerCase(); };
//# sourceMappingURL=locales.js.map