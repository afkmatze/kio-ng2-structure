import { Component } from '@angular/core'
import { NamedComponent, NamedComponentStructure, NamedFragmentComponentStructure } from 'kio-ng2-component-routing'


export interface ModuleOptions {
  components: NamedComponent[],
  publicationComponents?: Component[]
}