import { Component, Input, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core'
import { 
  KioContentType, KioFragment, KioFragmentModel, KioPrimitiveContentType,
  KioCtnPublication,
  KioContentModel,
  KioPublicationModel,
  KioContentData
} from 'kio-ng2'
import { AbstractComponent } from '../abstract/abstract.component'
import { KioBackendService } from '../../api/services/backend.service'

@Component({
  templateUrl: './publication.component.html',
  selector: 'kio-publication',
  styleUrls: [ './publication.component.scss' ]
})
export class PublicationComponent extends AbstractComponent<KioCtnPublication> {

  constructor(private backendService:KioBackendService){
    super()
  }

  @Input() node:KioPublicationModel

  @Input() cuid:string

  ngOnChanges(changes:SimpleChanges){
    const cuid = changes["cuid"]
    if ( cuid !== undefined )
    {
      if ( cuid.currentValue )
      {
        this.loadByCuid(cuid.currentValue)
      }
    }
  }

  loadByCuid(cuid:string){
    this.backendService.loadPublication({
      cuid 
    })
    .subscribe ( publication => {
      this.node = publication
    }, error => {
      console.error(error)
    } )
  }

  ngOnInit(){
    super.ngOnInit()
    console.log('init',this)
  }

  ngOnDestroy(){
    super.ngOnDestroy()
  }

}