import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LocaleService } from '../locale.service'
import { Router, NavigationStart, NavigationCancel, NavigationError, NavigationEnd } from '@angular/router'

const shortenLocale = locale => locale.split('_')[0]

@Component({
  selector: 'language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LanguageSelectorComponent implements OnInit {

  constructor(private localeService:LocaleService, private router:Router) { }

  locales:string[]=[]
  localeIndex:number=-1


  // @TODO: this has got to be toggled until new lang content is fetched
  isUpdating:boolean = false

  get nextLocale():string{
    const nextLocaleIndex = ( this.localeIndex + 1 < this.locales.length ) ? this.localeIndex + 1 : 0
    return this.locales[nextLocaleIndex]
  }

  toggleLocale(){
    this.localeService.updateLocale(this.nextLocale).subscribe()
  }

  ngOnInit() {

    this.localeService.locales
      .map(locales => locales.map ( shortenLocale ) )
      .subscribe((locales)=>{
        this.locales = locales
        this.localeIndex = this.locales.indexOf(this.localeService.current)
      })

    this.localeService.changes.map(shortenLocale).subscribe((locale)=>{
      this.localeIndex = this.locales.indexOf(locale)
    })

    this.router.events.subscribe(
        event => {
          if ( event instanceof NavigationStart )
          {
            this.isUpdating = true
          }
          else if (
              ( event instanceof NavigationError )
              || ( event instanceof NavigationCancel )
              || ( event instanceof NavigationEnd )
            )
          {
            this.isUpdating = false
          }
        }
      )
  }

}
