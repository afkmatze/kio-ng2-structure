import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Http } from '@angular/http'

import { SvgLayerComponent } from './svg/components/svg-layer/svg-layer.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Http
  ],
  declarations: [
    SvgLayerComponent
  ],
  exports: [
    SvgLayerComponent
  ]
})
export class KioNg2StructureModule {}