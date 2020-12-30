import { TestBed } from '@angular/core/testing';

import { ULoginProveedorService } from './u-login-proveedor.service';

describe('ULoginProveedorService', () => {
  let service: ULoginProveedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ULoginProveedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
