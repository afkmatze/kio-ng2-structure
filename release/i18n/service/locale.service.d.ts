import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
export declare class KioLocaleService {
    constructor();
    localeForUrl(url: string): string;
    locales: Observable<string[]>;
    current: string;
    changes: EventEmitter<string>;
    collapsed: boolean;
    readonly currentLang: string;
    findLocale(locale: string): string;
    supports(locale: string): boolean;
    updateLocale(locale: string): Observable<string>;
}
