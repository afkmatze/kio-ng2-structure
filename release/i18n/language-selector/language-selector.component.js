var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation } from '@angular/core';
import { KioLocaleService } from '../service/locale.service';
import { Router, NavigationStart, NavigationCancel, NavigationError, NavigationEnd } from '@angular/router';
var shortenLocale = function (locale) { return locale.split('_')[0]; };
var LanguageSelectorComponent = (function () {
    function LanguageSelectorComponent(localeService, router) {
        this.localeService = localeService;
        this.router = router;
        this.locales = [];
        this.localeIndex = -1;
        // @TODO: this has got to be toggled until new lang content is fetched
        this.isUpdating = false;
    }
    Object.defineProperty(LanguageSelectorComponent.prototype, "nextLocale", {
        get: function () {
            var nextLocaleIndex = (this.localeIndex + 1 < this.locales.length) ? this.localeIndex + 1 : 0;
            return this.locales[nextLocaleIndex];
        },
        enumerable: true,
        configurable: true
    });
    LanguageSelectorComponent.prototype.toggleLocale = function () {
        this.localeService.updateLocale(this.nextLocale).subscribe();
    };
    LanguageSelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.localeService.locales
            .map(function (locales) { return locales.map(shortenLocale); })
            .subscribe(function (locales) {
            _this.locales = locales;
            _this.localeIndex = _this.locales.indexOf(_this.localeService.current);
        });
        this.localeService.changes.map(shortenLocale).subscribe(function (locale) {
            _this.localeIndex = _this.locales.indexOf(locale);
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof NavigationStart) {
                _this.isUpdating = true;
            }
            else if ((event instanceof NavigationError)
                || (event instanceof NavigationCancel)
                || (event instanceof NavigationEnd)) {
                _this.isUpdating = false;
            }
        });
    };
    return LanguageSelectorComponent;
}());
LanguageSelectorComponent = __decorate([
    Component({
        selector: 'language-selector',
        templateUrl: './language-selector.component.html',
        styleUrls: ['./language-selector.component.scss'],
        encapsulation: ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [KioLocaleService, Router])
], LanguageSelectorComponent);
export { LanguageSelectorComponent };
//# sourceMappingURL=language-selector.component.js.map