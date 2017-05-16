import { Component } from '@angular/core';
var AbstractComponent = (function () {
    function AbstractComponent() {
    }
    AbstractComponent.prototype.onNodeUpdate = function () { };
    AbstractComponent.prototype.ngOnInit = function () {
    };
    AbstractComponent.prototype.ngOnDestroy = function () {
    };
    return AbstractComponent;
}());
export { AbstractComponent };
AbstractComponent.decorators = [
    { type: Component, args: [{
                template: '',
                selector: 'kio-abstract',
                styles: [""]
            },] },
];
/** @nocollapse */
AbstractComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=abstract.component.js.map