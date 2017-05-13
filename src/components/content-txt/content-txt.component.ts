import { Component, Input, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core'
import { 
  KioContentModel, KioCtnTxt, KioContentData
} from 'kio-ng2'
import { ContentComponent } from '../content/content.component'
import { ApiLoadState, KioBackendService } from '../../api'

@Component({
  templateUrl: './content-txt.component.html',
  selector: 'kio-txt',
  styleUrls: ['./content-txt.component.scss',]
})
export class TxtContentComponent extends ContentComponent<KioCtnTxt> {
  
  constructor(protected backendService:KioBackendService){
    super()
  }

  @Input() node:KioContentModel<KioCtnTxt>

  data:KioContentData<KioCtnTxt>


  loadNodeData ( node:KioContentModel<KioCtnTxt> ) {
    this.backendService.loadTxtContent(node).subscribe( data => {
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