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
export { PublicationComponent };
PublicationComponent.decorators = [
    { type: Component, args: [{
                templateUrl: './publication.component.html',
                selector: 'kio-publication',
                styleUrls: ['./publication.component.scss']
            },] },
];
/** @nocollapse */
PublicationComponent.ctorParameters = function () { return [
    { type: KioBackendService, },
]; };
PublicationComponent.propDecorators = {
    'node': [{ type: Input },],
    'cuid': [{ type: Input },],
};
//# sourceMappingURL=publication.component.js.map