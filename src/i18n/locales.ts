declare const require:any
const locale2 = require('locale2')
import * as constants from './constants'

export const supportedLocales:string[] = [
  constants.en_US,
  constants.de_DE
]

export const defaultLocale = constants.de_DE

export let current = constants.de_DE

export const matchLocale = ( locale:string ) => {
  const exactIdx = supportedLocales.indexOf ( locale )
  if ( exactIdx > -1 )
  {
    current = locale
  }
  else 
  {
    current = supportedLocales.find ( supportedLocale => supportedLocale.indexOf ( locale.toLowerCase() ) > -1 ) || defaultLocale
  }
  return current
}

export const browserLocale = matchLocale ( locale2 )

export const shortenLocale = ( locale:string ) => locale.slice(0,2).toLowerCase()
