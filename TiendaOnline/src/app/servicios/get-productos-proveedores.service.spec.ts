import { TestBed } from '@angular/core/testing';

import { GetProductosProveedoresService } from './get-productos-proveedores.service';

describe('GetProductosProveedoresService', () => {
  let service: GetProductosProveedoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductosProveedoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
