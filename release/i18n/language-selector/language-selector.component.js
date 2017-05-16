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
export { LanguageSelectorComponent };
LanguageSelectorComponent.decorators = [
    { type: Component, args: [{
                selector: 'language-selector',
                templateUrl: './language-selector.component.html',
                styleUrls: ['./language-selector.component.scss'],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
LanguageSelectorComponent.ctorParameters = function () { return [
    { type: KioLocaleService, },
    { type: Router, },
]; };
//# sourceMappingURL=language-selector.component.js.map