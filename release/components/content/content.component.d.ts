import { KioPrimitiveContentType, KioContentModel } from 'kio-ng2';
import { AbstractComponent } from '../abstract/abstract.component';
export declare class ContentComponent<T extends KioPrimitiveContentType> extends AbstractComponent<T> {
    node: KioContentModel<T>;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
