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
__decorate([
    Input(),
    __metadata("design:type", KioContentModel)
], TxtContentComponent.prototype, "node", void 0);
TxtContentComponent = __decorate([
    Component({
        templateUrl: './content-txt.component.html',
        selector: 'kio-txt',
        styleUrls: ['./content-txt.component.scss',]
    }),
    __metadata("design:paramtypes", [KioBackendService])
], TxtContentComponent);
export { TxtContentComponent };
//# sourceMappingURL=content-txt.component.js.map