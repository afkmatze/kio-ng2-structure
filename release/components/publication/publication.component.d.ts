import { SimpleChanges } from '@angular/core';
import { KioCtnPublication, KioPublicationModel } from 'kio-ng2';
import { AbstractComponent } from '../abstract/abstract.component';
import { KioBackendService } from '../../api/services/backend.service';
export declare class PublicationComponent extends AbstractComponent<KioCtnPublication> {
    private backendService;
    constructor(backendService: KioBackendService);
    node: KioPublicationModel;
    cuid: string;
    ngOnChanges(changes: SimpleChanges): void;
    loadByCuid(cuid: string): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
