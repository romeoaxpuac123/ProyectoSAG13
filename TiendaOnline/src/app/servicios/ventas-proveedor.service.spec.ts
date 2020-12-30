import { TestBed } from '@angular/core/testing';

import { VentasProveedorService } from './ventas-proveedor.service';

describe('VentasProveedorService', () => {
  let service: VentasProveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentasProveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
