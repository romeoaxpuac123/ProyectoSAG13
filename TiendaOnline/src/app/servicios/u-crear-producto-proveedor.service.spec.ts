import { TestBed } from '@angular/core/testing';

import { UCrearProductoProveedorService } from './u-crear-producto-proveedor.service';

describe('UCrearProductoProveedorService', () => {
  let service: UCrearProductoProveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UCrearProductoProveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
