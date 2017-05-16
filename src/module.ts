import { CommonModule } from '@angular/common'
import { NgModule, ModuleWithProviders } from '@angular/core'
import { HttpModule } from '@angular/http'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { KioBackendService } from './api/services/backend.service'
import { KioLocaleService } from './i18n/service/locale.service'

import { AllComponents } from './components/'

import { ModuleOptions } from './interfaces'

import { registerComponentStructure } from 'kio-ng2-component-routing'

// checkout: https://github.com/dimpu/angular2-markdown/tree/master/src/markdown

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [KioLocaleService,KioBackendService],
  declarations: [...AllComponents],
  entryComponents: [...AllComponents],
  exports: [CommonModule]
})
export class KioNg2StructureModule {
  public static forRoot(moduleOptions:ModuleOptions): ModuleWithProviders {
    console.log('init kio structure with options', moduleOptions )
    registerComponentStructure(moduleOptions.components)
    return {
      ngModule: KioNg2StructureModule,
      providers: []
    }
  }

}