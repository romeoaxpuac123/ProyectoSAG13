import { TestBed } from '@angular/core/testing';

import { DatosFacturaService } from './datos-factura.service';

describe('DatosFacturaService', () => {
  let service: DatosFacturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosFacturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
