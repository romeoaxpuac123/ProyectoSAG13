import { TestBed } from '@angular/core/testing';

import { ProductosProveedorService } from './productos-proveedor.service';

describe('ProductosProveedorService', () => {
  let service: ProductosProveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosProveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
