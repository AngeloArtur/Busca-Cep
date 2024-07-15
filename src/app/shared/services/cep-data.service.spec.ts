import { TestBed } from '@angular/core/testing';

import { CepDataService } from './cep-data.service';

describe('CepDataService', () => {
  let service: CepDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CepDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
