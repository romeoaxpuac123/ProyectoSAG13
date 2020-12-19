import { TestBed } from '@angular/core/testing';

import { ClienteAgregarProductoService } from './cliente-agregar-producto.service';

describe('ClienteAgregarProductoService', () => {
  let service: ClienteAgregarProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteAgregarProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
