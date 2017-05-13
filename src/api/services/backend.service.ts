import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/timeout'

import { KioLocaleService } from '../../i18n/service/locale.service'
import { 
  KioQuery, KioNode, KioQueryResult,
  KioContentModel, KioNodeModel, KioQueryModel,
  KioContentData,
  KioCtnPublication, KioCtnTxt, KioCtnSrc,
  KioPublication, KioPublicationModel,
  KioQueryableContentType
} from 'kio-ng2'

const API_URL = 'https://pb8i8ysw33.execute-api.eu-central-1.amazonaws.com/v2/api'
//const API_URL = 'https://vaskbde08f.execute-api.eu-central-1.amazonaws.com/stage/api'
const API_TIMEOUT = 10 * 1000


@Injectable()
export class KioBackendService {

  constructor(protected http:Http,  private localeService:KioLocaleService) { }

  private buildNodeQuery <T extends KioQueryableContentType>( node:KioNode<T>, params?:any ) : KioQuery {
    const query = KioQueryModel.fromNode ( node )
    if ( params && params.locale )
    {
      query.locale = params.locale
    }
    else
    {
      query.locale = this.localeService.current
    }
    query.params = params || {}
    return query
  }


  loadPublication ( publicationQuery:KioNode<KioCtnPublication> ):Observable<KioPublicationModel> {
    const query = this.buildNodeQuery(publicationQuery)
    console.log('post query',query)
    query.role = 'pub'
    return this.http.post(
      API_URL,
      query
    )
    .map ( response => this.parsePublicationResponse(response) )
  }


  parsePublicationResponse ( response:Response ):KioPublicationModel {
    return new KioPublicationModel(response.json())
  }


  loadTxtContent ( node:KioContentModel<KioCtnTxt> ):Observable<KioContentData<KioCtnTxt>> {
    const query = this.buildNodeQuery(node)
    console.log('post query',query)
    //query.role = 'pub'
    return this.http.post(
      API_URL,
      query
    )
    .map ( response => this.parseTxtResponse(response) )
  }


  parseTxtResponse ( response:Response ):KioContentData<KioCtnTxt> {
    return response.json()
  }

  loadSrcContent ( node:KioContentModel<KioCtnSrc>, params:any ):Observable<KioContentData<KioCtnSrc>> {
    const query = this.buildNodeQuery(node)
    console.log('post query',query)
    //query.role = 'pub'
    return this.http.post(
      API_URL,
      { ...query, params }
    )
    .map ( response => this.parseSrcResponse(response) )
  }


  parseSrcResponse ( response:Response ):KioContentData<KioCtnSrc> {
    return response.json()
  }

}
