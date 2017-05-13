import { Component, Input, OnInit, OnDestroy } from '@angular/core'
import { KioContentType, KioCtnFragment, KioFragment, KioFragmentModel, KioContentModel } from 'kio-ng2'
import { AbstractComponent } from '../abstract/abstract.component'

@Component({
  templateUrl: './fragment.component.html',
  selector: 'kio-fragment',
  styleUrls: [ './fragment.component.scss' ]
})
export class FragmentComponent extends AbstractComponent<KioCtnFragment> {

  @Input() node:KioFragmentModel<KioCtnFragment>

  ngOnInit(){
    super.ngOnInit()
  }

  ngOnDestroy(){
    super.ngOnDestroy()
  }

}