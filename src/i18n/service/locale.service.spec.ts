import { TestBed, inject } from '@angular/core/testing';

import { KioLocaleService } from './locale.service';

describe('KioLocaleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KioLocaleService]
    });
  });

  it('should ...', inject([KioLocaleService], (service: KioLocaleService) => {
    expect(service).toBeTruthy();
  }));
});
