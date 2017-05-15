import { OnInit, OnDestroy } from '@angular/core';
import { KioStructureType, KioNodeModel } from 'kio-ng2';
export declare class AbstractComponent<T extends KioStructureType> implements OnInit, OnDestroy {
    contentType: T;
    node: KioNodeModel<T>;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
