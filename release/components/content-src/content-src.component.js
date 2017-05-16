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
var SrcContentComponent = (function (_super) {
    __extends(SrcContentComponent, _super);
    function SrcContentComponent(backendService) {
        var _this = _super.call(this) || this;
        _this.backendService = backendService;
        return _this;
    }
    SrcContentComponent.prototype.loadNodeData = function (node) {
        var _this = this;
        this.backendService.loadSrcContent(node, {}).subscribe(function (data) {
            _this.data = data;
        });
    };
    SrcContentComponent.prototype.ngOnChanges = function (changes) {
        var node = changes["node"];
        if (node !== undefined) {
            if (node.currentValue) {
                this.loadNodeData(node.currentValue);
            }
        }
    };
    SrcContentComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
    };
    SrcContentComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    return SrcContentComponent;
}(ContentComponent));
export { SrcContentComponent };
SrcContentComponent.decorators = [
    { type: Component, args: [{
                templateUrl: './content-src.component.html',
                selector: 'kio-src',
                styleUrls: ['./content-src.component.scss']
            },] },
];
/** @nocollapse */
SrcContentComponent.ctorParameters = function () { return [
    { type: KioBackendService, },
]; };
SrcContentComponent.propDecorators = {
    'node': [{ type: Input },],
};
//# sourceMappingURL=content-src.component.js.map