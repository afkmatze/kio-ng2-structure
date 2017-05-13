import { Component, Input, OnInit, OnDestroy } from '@angular/core'
import { 
  KioContentType, KioFragment, KioFragmentModel, KioPrimitiveContentType,
  KioContentModel,
  KioContentData
} from 'kio-ng2'
import { AbstractComponent } from '../abstract/abstract.component'

@Component({
  template: '',
  selector: 'kio-content',
  styles: [``]
})
export class ContentComponent<T extends KioPrimitiveContentType> extends AbstractComponent<T> {

  @Input() node:KioContentModel<T>

  ngOnInit(){
    super.ngOnInit()
  }

  ngOnDestroy(){
    super.ngOnDestroy()
  }

}