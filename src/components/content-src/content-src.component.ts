import { Component, Input, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core'
import { 
  KioContentModel, KioCtnSrc, KioContentData
} from 'kio-ng2'
import { ContentComponent } from '../content/content.component'
import { ApiLoadState, KioBackendService } from '../../api'

@Component({
  templateUrl: './content-src.component.html',
  selector: 'kio-src',
  styleUrls: ['./content-src.component.scss']
})
export class SrcContentComponent extends ContentComponent<KioCtnSrc> {

  constructor(protected backendService:KioBackendService){
    super()
  }

  @Input() node:KioContentModel<KioCtnSrc>

  data:KioContentData<KioCtnSrc>

  loadNodeData ( node:KioContentModel<KioCtnSrc> ) {
    this.backendService.loadSrcContent(node,{}).subscribe( data => {
      this.data = data
    })
  }

  ngOnChanges(changes:SimpleChanges){
    const node = changes["node"]
    if ( node !== undefined )
    {
      if ( node.currentValue )
      {
        this.loadNodeData( node.currentValue )
      }
    }
  }

  ngOnInit(){
    super.ngOnInit()
  }

  ngOnDestroy(){
    super.ngOnDestroy()
  }

}