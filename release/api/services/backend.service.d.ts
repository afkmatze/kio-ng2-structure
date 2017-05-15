import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { KioLocaleService } from '../../i18n/service/locale.service';
import { KioNode, KioContentModel, KioContentData, KioCtnPublication, KioCtnTxt, KioCtnSrc, KioPublicationModel } from 'kio-ng2';
export declare class KioBackendService {
    protected http: Http;
    private localeService;
    constructor(http: Http, localeService: KioLocaleService);
    private buildNodeQuery<T>(node, params?);
    loadPublication(publicationQuery: KioNode<KioCtnPublication>): Observable<KioPublicationModel>;
    parsePublicationResponse(response: Response): KioPublicationModel;
    loadTxtContent(node: KioContentModel<KioCtnTxt>): Observable<KioContentData<KioCtnTxt>>;
    parseTxtResponse(response: Response): KioContentData<KioCtnTxt>;
    loadSrcContent(node: KioContentModel<KioCtnSrc>, params: any): Observable<KioContentData<KioCtnSrc>>;
    parseSrcResponse(response: Response): KioContentData<KioCtnSrc>;
}
