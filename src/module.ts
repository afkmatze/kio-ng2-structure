import { CommonModule } from '@angular/common'
import { NgModule, ModuleWithProviders } from '@angular/core'
import { HttpModule } from '@angular/http'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { KioBackendService } from './api/services/backend.service'
import { KioLocaleService } from './i18n/service/locale.service'

import { AbstractComponent } from './components/abstract/abstract.component'
import { PublicationComponent } from './components/publication/publication.component'
import { FragmentComponent } from './components/fragment/fragment.component'
import { ContentComponent } from './components/content/content.component'
import { SrcContentComponent } from './components/content-src/content-src.component'
import { TxtContentComponent } from './components/content-txt/content-txt.component'

import { ModuleOptions } from './interfaces'

import { registerComponentStructure } from 'kio-ng2-component-routing'


const StructureComponents = [ PublicationComponent, FragmentComponent, ContentComponent, SrcContentComponent, TxtContentComponent ]

// checkout: https://github.com/dimpu/angular2-markdown/tree/master/src/markdown

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [KioLocaleService,KioBackendService],
  declarations: [AbstractComponent,...StructureComponents],
  entryComponents: [...StructureComponents],
  exports: [CommonModule,...StructureComponents]
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