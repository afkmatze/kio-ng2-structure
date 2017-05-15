var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { KioBackendService } from './api/services/backend.service';
import { KioLocaleService } from './i18n/service/locale.service';
import { AbstractComponent } from './components/abstract/abstract.component';
import { PublicationComponent } from './components/publication/publication.component';
import { FragmentComponent } from './components/fragment/fragment.component';
import { ContentComponent } from './components/content/content.component';
import { SrcContentComponent } from './components/content-src/content-src.component';
import { TxtContentComponent } from './components/content-txt/content-txt.component';
import { registerComponentStructure } from 'kio-ng2-component-routing';
var StructureComponents = [PublicationComponent, FragmentComponent, ContentComponent, SrcContentComponent, TxtContentComponent];
// checkout: https://github.com/dimpu/angular2-markdown/tree/master/src/markdown
var KioNg2StructureModule = KioNg2StructureModule_1 = (function () {
    function KioNg2StructureModule() {
    }
    KioNg2StructureModule.forRoot = function (moduleOptions) {
        registerComponentStructure(moduleOptions.components);
        return {
            ngModule: KioNg2StructureModule_1,
            providers: []
        };
    };
    return KioNg2StructureModule;
}());
KioNg2StructureModule = KioNg2StructureModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpModule
        ],
        providers: [KioLocaleService, KioBackendService],
        declarations: [AbstractComponent].concat(StructureComponents),
        entryComponents: StructureComponents.slice(),
        exports: [CommonModule].concat(StructureComponents)
    })
], KioNg2StructureModule);
export { KioNg2StructureModule };
var KioNg2StructureModule_1;
//# sourceMappingURL=module.js.map