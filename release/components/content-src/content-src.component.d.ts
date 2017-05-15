import { SimpleChanges } from '@angular/core';
import { KioContentModel, KioCtnSrc, KioContentData } from 'kio-ng2';
import { ContentComponent } from '../content/content.component';
import { KioBackendService } from '../../api';
export declare class SrcContentComponent extends ContentComponent<KioCtnSrc> {
    protected backendService: KioBackendService;
    constructor(backendService: KioBackendService);
    node: KioContentModel<KioCtnSrc>;
    data: KioContentData<KioCtnSrc>;
    loadNodeData(node: KioContentModel<KioCtnSrc>): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
