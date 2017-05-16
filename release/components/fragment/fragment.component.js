var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component, Input } from '@angular/core';
import { AbstractComponent } from '../abstract/abstract.component';
var FragmentComponent = (function (_super) {
    __extends(FragmentComponent, _super);
    function FragmentComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FragmentComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    FragmentComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    return FragmentComponent;
}(AbstractComponent));
export { FragmentComponent };
FragmentComponent.decorators = [
    { type: Component, args: [{
                templateUrl: './fragment.component.html',
                selector: 'kio-fragment',
                styleUrls: ['./fragment.component.scss']
            },] },
];
/** @nocollapse */
FragmentComponent.ctorParameters = function () { return []; };
FragmentComponent.propDecorators = {
    'node': [{ type: Input },],
};
//# sourceMappingURL=fragment.component.js.map