import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { KioBackendService } from './api/services/backend.service'

// checkout: https://github.com/dimpu/angular2-markdown/tree/master/src/markdown

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [KioBackendService],
  declarations: [],
  exports: [CommonModule,KioBackendService]
})
export class KioNg2StructureModule {}