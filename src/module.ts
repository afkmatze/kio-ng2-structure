import { CommonModule } from '@angular/common'
import { NgModule, ModuleWithProviders } from '@angular/core'
import { HttpModule } from '@angular/http'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { KioBackendService } from './api/services/backend.service'
import { KioLocaleService } from './i18n/service/locale.service'

import { AllComponents, FragmentComponent } from './components'

import { ModuleOptions } from './interfaces'

import { registerComponentStructure } from 'kio-ng2-component-routing'
import { SomeClass } from './classes/some.class'

// checkout: https://github.com/dimpu/angular2-markdown/tree/master/src/markdown

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [KioLocaleService,KioBackendService],
  declarations: [...AllComponents],
  entryComponents: [...AllComponents],
  exports: [CommonModule, FragmentComponent, SomeClass]
})
export class KioNg2StructureModule {}