var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
KioLocaleService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], KioLocaleService);
export { KioLocaleService };
//# sourceMappingURL=locale.service.js.map