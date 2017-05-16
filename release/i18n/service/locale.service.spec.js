import { TestBed, inject } from '@angular/core/testing';
import { KioLocaleService } from './locale.service';
describe('KioLocaleService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [KioLocaleService]
        });
    });
    it('should ...', inject([KioLocaleService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=locale.service.spec.js.map