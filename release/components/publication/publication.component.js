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
import { KioPublicationModel } from 'kio-ng2';
import { AbstractComponent } from '../abstract/abstract.component';
import { KioBackendService } from '../../api/services/backend.service';
var PublicationComponent = (function (_super) {
    __extends(PublicationComponent, _super);
    function PublicationComponent(backendService) {
        var _this = _super.call(this) || this;
        _this.backendService = backendService;
        return _this;
    }
    PublicationComponent.prototype.ngOnChanges = function (changes) {
        var cuid = changes["cuid"];
        if (cuid !== undefined) {
            if (cuid.currentValue) {
                this.loadByCuid(cuid.currentValue);
            }
        }
    };
    PublicationComponent.prototype.loadByCuid = function (cuid) {
        var _this = this;
        this.backendService.loadPublication({
            cuid: cuid
        })
            .subscribe(function (publication) {
            _this.node = publication;
        }, function (error) {
            console.error(error);
        });
    };
    PublicationComponent.prototype.ngOnInit = function () {
        _super.prototype.ngOnInit.call(this);
        console.log('init', this);
    };
    PublicationComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    return PublicationComponent;
}(AbstractComponent));
__decorate([
    Input(),
    __metadata("design:type", KioPublicationModel)
], PublicationComponent.prototype, "node", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PublicationComponent.prototype, "cuid", void 0);
PublicationComponent = __decorate([
    Component({
        templateUrl: './publication.component.html',
        selector: 'kio-publication',
        styleUrls: ['./publication.component.scss']
    }),
    __metadata("design:paramtypes", [KioBackendService])
], PublicationComponent);
export { PublicationComponent };
//# sourceMappingURL=publication.component.js.map