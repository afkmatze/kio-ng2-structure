import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { KioBackendService } from './api/services/backend.service';
import { KioLocaleService } from './i18n/service/locale.service';
import { AllComponents, FragmentComponent } from './components';
import { SomeClass } from './classes/some.class';
// checkout: https://github.com/dimpu/angular2-markdown/tree/master/src/markdown
var KioNg2StructureModule = (function () {
    function KioNg2StructureModule() {
    }
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
                exports: [CommonModule, FragmentComponent, SomeClass]
            },] },
];
/** @nocollapse */
KioNg2StructureModule.ctorParameters = function () { return []; };
//# sourceMappingURL=module.js.map