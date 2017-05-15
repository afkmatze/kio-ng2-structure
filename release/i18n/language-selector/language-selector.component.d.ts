import { OnInit } from '@angular/core';
import { KioLocaleService } from '../service/locale.service';
import { Router } from '@angular/router';
export declare class LanguageSelectorComponent implements OnInit {
    private localeService;
    private router;
    constructor(localeService: KioLocaleService, router: Router);
    locales: string[];
    localeIndex: number;
    isUpdating: boolean;
    readonly nextLocale: string;
    toggleLocale(): void;
    ngOnInit(): void;
}
