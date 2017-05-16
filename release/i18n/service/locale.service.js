import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import * as locales from '../locales';
var KioLocaleService = (function () {
    function KioLocaleService() {
        this.locales = Observable.of(locales.supportedLocales);
        this.current = locales.browserLocale;
        this.changes = new EventEmitter();
        this.collapsed = true;
    }
    KioLocaleService.prototype.localeForUrl = function (url) {
        return locales.supportedLocales.find(function (locale) { return locales.shortenLocale(locale) === url; }) || this.current;
    };
    Object.defineProperty(KioLocaleService.prototype, "currentLang", {
        get: function () {
            return locales.shortenLocale(this.current || locales.defaultLocale);
        },
        enumerable: true,
        configurable: true
    });
    KioLocaleService.prototype.findLocale = function (locale) {
        return locales.supportedLocales.find(function (ll) { return ll.indexOf(locale) > -1; });
    };
    KioLocaleService.prototype.supports = function (locale) {
        return locales.supportedLocales.indexOf(locale) > -1;
    };
    KioLocaleService.prototype.updateLocale = function (locale) {
        var matchedLocale = locales.matchLocale(locale);
        if (matchedLocale === this.current) {
            return Observable.empty();
        }
        if (!this.supports(matchedLocale)) {
            return Observable.throw(locale + " is not supported.");
        }
        this.current = matchedLocale;
        this.changes.emit(matchedLocale);
        return Observable.of(matchedLocale);
    };
    return KioLocaleService;
}());
export { KioLocaleService };
KioLocaleService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
KioLocaleService.ctorParameters = function () { return []; };
//# sourceMappingURL=locale.service.js.map