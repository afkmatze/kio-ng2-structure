var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { KioLocaleService } from '../../i18n/service/locale.service';
import { KioQueryModel, KioPublicationModel } from 'kio-ng2';
var API_URL = 'https://pb8i8ysw33.execute-api.eu-central-1.amazonaws.com/v2/api';
//const API_URL = 'https://vaskbde08f.execute-api.eu-central-1.amazonaws.com/stage/api'
var API_TIMEOUT = 10 * 1000;
var KioBackendService = (function () {
    function KioBackendService(http, localeService) {
        this.http = http;
        this.localeService = localeService;
    }
    KioBackendService.prototype.buildNodeQuery = function (node, params) {
        var query = KioQueryModel.fromNode(node);
        if (params && params.locale) {
            query.locale = params.locale;
        }
        else {
            query.locale = this.localeService.current;
        }
        query.params = params || {};
        return query;
    };
    KioBackendService.prototype.loadPublication = function (publicationQuery) {
        var _this = this;
        var query = this.buildNodeQuery(publicationQuery);
        console.log('post query', query);
        query.role = 'pub';
        return this.http.post(API_URL, query)
            .map(function (response) { return _this.parsePublicationResponse(response); });
    };
    KioBackendService.prototype.parsePublicationResponse = function (response) {
        return new KioPublicationModel(response.json());
    };
    KioBackendService.prototype.loadTxtContent = function (node) {
        var _this = this;
        var query = this.buildNodeQuery(node);
        console.log('post query', query);
        //query.role = 'pub'
        return this.http.post(API_URL, query)
            .map(function (response) { return _this.parseTxtResponse(response); });
    };
    KioBackendService.prototype.parseTxtResponse = function (response) {
        return response.json();
    };
    KioBackendService.prototype.loadSrcContent = function (node, params) {
        var _this = this;
        var query = this.buildNodeQuery(node);
        console.log('post query', query);
        //query.role = 'pub'
        return this.http.post(API_URL, __assign({}, query, { params: params }))
            .map(function (response) { return _this.parseSrcResponse(response); });
    };
    KioBackendService.prototype.parseSrcResponse = function (response) {
        return response.json();
    };
    return KioBackendService;
}());
KioBackendService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, KioLocaleService])
], KioBackendService);
export { KioBackendService };
//# sourceMappingURL=backend.service.js.map