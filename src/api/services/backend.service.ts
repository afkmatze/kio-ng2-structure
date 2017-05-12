import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/timeout'

import { LocaleService } from '../../i18n/locale.service'
import { 
  KioQuery, KioNode, KioQueryResult,
  KioContentModel, KioNodeModel, KioQueryModel
} from 'kio-ng2'

import { ContentMockingService } from 'kio-ng2-component-routing'

const API_URL = 'https://pb8i8ysw33.execute-api.eu-central-1.amazonaws.com/v2/api'
//const API_URL = 'https://vaskbde08f.execute-api.eu-central-1.amazonaws.com/stage/api'
const API_TIMEOUT = 10 * 1000


@Injectable()
export class KioBackendService {

  constructor(protected http:Http, private mockingService:ContentMockingService, private localeService:LocaleService) { }

  private cache : Map<string,Observable<KioQueryResult>> = new Map()

  private parseResponse ( response:Response , node:KioContentModel ):any {
    const responseData:any = response.json()
    return this.parseResponseData(responseData,node)
  }
  private parseResponseData ( responseData:any , node:KioContentModel ):any {
      if ( node.type === 'txt' )
      return responseData

    responseData = responseData || {}
    
    const dataKeys:string[] = Object.keys(responseData)
    if ( dataKeys.length > 0 )
      return responseData

    return this.mockingService.mockContentData ( node )
  }

  private _queryNode ( node : KioContentModel, contentParams:any ) : Observable<KioQueryResult> {
    const query : KioQuery = this.buildNodeQuery(node,contentParams)
    return this.http.post ( API_URL , query )
        .timeout(API_TIMEOUT)
        .map ( (response) => this.mapResponseData ( query , this.parseResponse(response,node) ) )
        .catch ( ( error:Response|any ) => {
          let errorMsg:string
          if ( error instanceof Response ) {
            const body = error.json()
            const err = body.error || JSON.stringify(body)
            errorMsg = `${error.status} - ${error.statusText || ''} ${err}`
          } else {
            errorMsg = error.message ? error.message : error.toString()
          }
          /*console.groupCollapsed('Backend error')
          console.trace('Node: ', node )
          console.log ( 'Failed to load content with query: ' + JSON.stringify(query) )
          console.groupEnd()*/
          return Observable.throw(errorMsg)
        } )
  }

private mapResponseData ( query : KioQuery , responseData:any ) : KioQueryResult {
  return ({
    success: true ,
    error: null,
    query,
    data: responseData
  })
}

private _query ( query : KioQuery ) : Observable<KioQueryResult> {
    return this.http.post ( API_URL , query )
        .map ( (response) => this.mapResponseData ( query , response.json() ) )
        .catch ( ( error:Response|any ) => {
          let errorMsg:string
          if ( error instanceof Response ) {
            const body = error.json()
            const err = body.error || JSON.stringify(body)
            errorMsg = `${error.status} - ${error.statusText || ''} ${err}`
          } else {
            errorMsg = error.message ? error.message : error.toString()
          }
          console.error ( errorMsg )
          return Observable.throw(errorMsg)
        } )


  }

  private post ( url:string, query?:any ) {
    return this.http.post ( url , query )
              .map ( response => response.json() )
  }

  loadMockedData( node : KioContentModel , contentParams:any ) : Observable<KioQueryResult> {
    const query : KioQuery = this.buildNodeQuery(node,contentParams)
    const data = this.mockingService.mockContentData (node,contentParams)
    const responseData : KioQueryResult = this.mapResponseData ( query , data )

    const t = 200 * (1+Math.floor(Math.random()*10))
    return Observable.from(Promise.resolve(responseData)).delay(t)
  }

  private buildNodeQuery ( node:KioContentModel, params:any ) : KioQuery {
    const query = KioQueryModel.fromNode ( <KioNodeModel>node )
    if ( params.locale )
    {
      query.locale = params.locale
    }
    else
    {
      query.locale = this.localeService.current
    }
    query.params = params
    return query
  }

  loadNodeContent ( node : KioContentModel , contentParams:any ) : Observable<KioQueryResult> {
    if ( /^\[mock/.test(node.cuid) )
      return this.loadMockedData ( node , contentParams )

    const query:KioQuery = this.buildNodeQuery(node, contentParams)
    const tStart = Date.now()
    return this._queryNode(node,contentParams).map ( result => {
      return result
    } )
  }

  load ( query : KioQuery ) : Observable<KioQueryResult> {
    query.locale = this.localeService.current
    return this.post ( API_URL, query ).map ( ( response ) => this.mapResponseData ( query, response ) )
  }

}
