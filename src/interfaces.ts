import { Component, Input, OnInit, OnDestroy } from '@angular/core'
import { 
  KioNodeModel, 
  KioChildContentType, KioPrimitiveContentType,
  KioNodeType, 
  KioFragmentModel, KioContentModel,
  KioContentData
} from 'kio-ng2'
import { NamedComponent, NamedComponentStructure, NamedFragmentComponentStructure } from 'kio-ng2-component-routing'


export interface ModuleOptions {
  components: NamedComponent[],
  publicationComponents?: Component[]
}

export interface AbstractComponent<T extends KioChildContentType> extends OnInit, OnDestroy {
  contentType:T
  node:KioNodeModel<T>
  onNodeUpdate():void  
}

export interface FragmentComponent extends AbstractComponent<KioNodeType.fragment> {
  node:KioFragmentModel<KioNodeType.fragment>
}

export interface ContentComponent<T extends KioPrimitiveContentType> extends AbstractComponent<T> {
  node:KioContentModel<T>
  data:KioContentData<T>
}

export interface SrcContentComponent extends ContentComponent<KioNodeType.src> {
  node:KioContentModel<KioNodeType.src>
  data:KioContentData<KioNodeType.src>

}

export interface TxtContentComponent extends ContentComponent<KioNodeType.txt> {
  node:KioContentModel<KioNodeType.txt>
  data:KioContentData<KioNodeType.txt>

}