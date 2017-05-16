import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { KioBackendService } from './api/services/backend.service';
import { KioLocaleService } from './i18n/service/locale.service';
import { AllComponents } from './components/';
import { registerComponentStructure } from 'kio-ng2-component-routing';
// checkout: https://github.com/dimpu/angular2-markdown/tree/master/src/markdown
var KioNg2StructureModule = (function () {
    function KioNg2StructureModule() {
    }
    KioNg2StructureModule.forRoot = function (moduleOptions) {
        console.log('init kio structure with options', moduleOptions);
        registerComponentStructure(moduleOptions.components);
        return {
            ngModule: KioNg2StructureModule,
            providers: []
        };
    };
    return KioNg2StructureModule;
}());
export { KioNg2StructureModule };
KioNg2StructureModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpModule
                ],
                providers: [KioLocaleService, KioBackendService],
                declarations: AllComponents.slice(),
                entryComponents: AllComponents.slice(),
                exports: [CommonModule]
            },] },
];
/** @nocollapse */
KioNg2StructureModule.ctorParameters = function () { return []; };
//# sourceMappingURL=module.js.map