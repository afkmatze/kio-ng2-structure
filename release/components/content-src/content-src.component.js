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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { KioContentModel } from 'kio-ng2';
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
__decorate([
    Input(),
    __metadata("design:type", KioContentModel)
], SrcContentComponent.prototype, "node", void 0);
SrcContentComponent = __decorate([
    Component({
        templateUrl: './content-src.component.html',
        selector: 'kio-src',
        styleUrls: ['./content-src.component.scss']
    }),
    __metadata("design:paramtypes", [KioBackendService])
], SrcContentComponent);
export { SrcContentComponent };
//# sourceMappingURL=content-src.component.js.map