import { TestBed } from '@angular/core/testing';

import { ClienteEliminarProductoService } from './cliente-eliminar-producto.service';

describe('ClienteEliminarProductoService', () => {
  let service: ClienteEliminarProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteEliminarProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
