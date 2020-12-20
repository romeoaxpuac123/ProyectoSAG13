import { TestBed } from '@angular/core/testing';

import { ProductosSubastaProveedorService } from './productos-subasta-proveedor.service';

describe('ProductosSubastaProveedorService', () => {
  let service: ProductosSubastaProveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosSubastaProveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
