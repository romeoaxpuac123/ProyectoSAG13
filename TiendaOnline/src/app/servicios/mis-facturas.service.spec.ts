import { TestBed } from '@angular/core/testing';

import { MisFacturasService } from './mis-facturas.service';

describe('MisFacturasService', () => {
  let service: MisFacturasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisFacturasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
