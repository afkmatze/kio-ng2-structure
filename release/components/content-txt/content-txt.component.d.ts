import { SimpleChanges } from '@angular/core';
import { KioContentModel, KioCtnTxt, KioContentData } from 'kio-ng2';
import { ContentComponent } from '../content/content.component';
import { KioBackendService } from '../../api';
export declare class TxtContentComponent extends ContentComponent<KioCtnTxt> {
    protected backendService: KioBackendService;
    constructor(backendService: KioBackendService);
    node: KioContentModel<KioCtnTxt>;
    data: KioContentData<KioCtnTxt>;
    loadNodeData(node: KioContentModel<KioCtnTxt>): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
