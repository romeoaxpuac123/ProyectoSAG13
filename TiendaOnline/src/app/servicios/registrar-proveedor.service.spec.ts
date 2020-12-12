import { TestBed } from '@angular/core/testing';

import { RegistrarProveedorService } from './registrar-proveedor.service';

describe('RegistrarProveedorService', () => {
  let service: RegistrarProveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarProveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
