import { Injectable, EventEmitter } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router'
import { Observable } from 'rxjs'
import * as locales from '../locales'

@Injectable()
export class KioLocaleService {

  constructor() {}

  localeForUrl ( url:string ) {
    return locales.supportedLocales.find ( locale => locales.shortenLocale(locale) === url ) || this.current
  }


  locales:Observable<string[]>=Observable.of(locales.supportedLocales)
  current:string=locales.browserLocale
  changes:EventEmitter<string>=new EventEmitter<string>()
  collapsed:boolean=true

  get currentLang():string {
    return locales.shortenLocale(this.current || locales.defaultLocale)
  }

  findLocale ( locale:string ) {
    return locales.supportedLocales.find ( ll => ll.indexOf(locale) > -1 )
  }

  supports ( locale:string ):boolean {
    return locales.supportedLocales.indexOf(locale) > -1
  }

  updateLocale ( locale:string ):Observable<string> {

    const matchedLocale = locales.matchLocale ( locale )

    if ( matchedLocale === this.current )
    {
      return Observable.empty()
    }

    if ( !this.supports(matchedLocale) )
    {
      return Observable.throw(`${locale} is not supported.`)
    }

    this.current = matchedLocale
    this.changes.emit(matchedLocale)
    return Observable.of(matchedLocale)
  }

}
