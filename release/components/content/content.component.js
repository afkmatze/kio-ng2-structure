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
var ContentComponent = (function (_super) {
    __extends(ContentComponent, _super);
    function ContentComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    ContentComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    return ContentComponent;
}(AbstractComponent));
export { ContentComponent };
ContentComponent.decorators = [
    { type: Component, args: [{
                template: '',
                selector: 'kio-content',
                styles: [""]
            },] },
];
/** @nocollapse */
ContentComponent.ctorParameters = function () { return []; };
ContentComponent.propDecorators = {
    'node': [{ type: Input },],
};
//# sourceMappingURL=content.component.js.map