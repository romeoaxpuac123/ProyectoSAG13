import { TestBed } from '@angular/core/testing';

import { URegistroProveedorService } from './u-registro-proveedor.service';

describe('URegistroProveedorService', () => {
  let service: URegistroProveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(URegistroProveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
