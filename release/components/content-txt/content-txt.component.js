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
import { ContentComponent } from '../content/content.component';
import { KioBackendService } from '../../api';
var TxtContentComponent = (function (_super) {
    __extends(TxtContentComponent, _super);
    function TxtContentComponent(backendService) {
        var _this = _super.call(this) || this;
        _this.backendService = backendService;
        return _this;
    }
    TxtContentComponent.prototype.loadNodeData = function (node) {
        var _this = this;
        this.backendService.loadTxtContent(node).subscribe(function (data) {
            _this.data = data;
        });
    };
    TxtContentComponent.prototype.ngOnChanges = function (changes) {
        var node = changes["node"];
        if (node !== undefined) {
            if (node.currentValue) {
                this.loadNodeData(node.currentValue);
            }
        }
    };
    TxtContentComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    TxtContentComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    return TxtContentComponent;
}(ContentComponent));
export { TxtContentComponent };
TxtContentComponent.decorators = [
    { type: Component, args: [{
                templateUrl: './content-txt.component.html',
                selector: 'kio-txt',
                styleUrls: ['./content-txt.component.scss',]
            },] },
];
/** @nocollapse */
TxtContentComponent.ctorParameters = function () { return [
    { type: KioBackendService, },
]; };
TxtContentComponent.propDecorators = {
    'node': [{ type: Input },],
};
//# sourceMappingURL=content-txt.component.js.map