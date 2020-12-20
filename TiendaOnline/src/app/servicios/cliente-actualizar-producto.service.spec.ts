import { TestBed } from '@angular/core/testing';

import { ClienteActualizarProductoService } from './cliente-actualizar-producto.service';

describe('ClienteActualizarProductoService', () => {
  let service: ClienteActualizarProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteActualizarProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
