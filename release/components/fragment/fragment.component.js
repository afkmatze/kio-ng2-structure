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
import { KioFragmentModel } from 'kio-ng2';
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
__decorate([
    Input(),
    __metadata("design:type", KioFragmentModel)
], FragmentComponent.prototype, "node", void 0);
FragmentComponent = __decorate([
    Component({
        templateUrl: './fragment.component.html',
        selector: 'kio-fragment',
        styleUrls: ['./fragment.component.scss']
    })
], FragmentComponent);
export { FragmentComponent };
//# sourceMappingURL=fragment.component.js.map