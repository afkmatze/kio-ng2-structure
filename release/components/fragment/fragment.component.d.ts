import { KioCtnFragment, KioFragmentModel } from 'kio-ng2';
import { AbstractComponent } from '../abstract/abstract.component';
export declare class FragmentComponent extends AbstractComponent<KioCtnFragment> {
    node: KioFragmentModel<KioCtnFragment>;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
