import { TestBed } from '@angular/core/testing';

import { PagarFacturaService } from './pagar-factura.service';

describe('PagarFacturaService', () => {
  let service: PagarFacturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagarFacturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
