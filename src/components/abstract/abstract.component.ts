import { Component, OnInit, OnDestroy } from '@angular/core'
import { KioStructureType, KioNodeModel } from 'kio-ng2'


@Component({
  template: '',
  selector: 'kio-abstract',
  styles: [``]
})
export class AbstractComponent<T extends KioStructureType> implements OnInit, OnDestroy {

  contentType:T

  node:KioNodeModel<T>

  onNodeUpdate(){}

  ngOnInit(){

  }

  ngOnDestroy(){

  }

}