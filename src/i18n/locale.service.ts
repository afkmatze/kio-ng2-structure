import { Injectable, EventEmitter } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router'
import { Observable } from 'rxjs'
import * as locales from './locales'
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LocaleService {

  constructor(private translateService:TranslateService, private router:Router) {
    this.translateService.setDefaultLang(this.currentLang)
    this.translateService.use(this.currentLang)

    /*this.router.events
      .filter ( (event:RoutesRecognized) => event instanceof RoutesRecognized )
      .map ( event => {
        console.log('LocaleService recognized route', event )
        return event
      } )
      .map ( (event:RoutesRecognized) => this.localeForUrl(event.url.substr(1)) ) //remove leading slash
      .distinct()
      .subscribe ( locale => this.updateLocale(locale) )*/
  }

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
    this.translateService.use(this.currentLang)
    this.changes.emit(matchedLocale)
    return Observable.of(matchedLocale)
  }

}
