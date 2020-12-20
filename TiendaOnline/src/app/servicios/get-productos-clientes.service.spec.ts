import { TestBed } from '@angular/core/testing';

import { GetProductosClientesService } from './get-productos-clientes.service';

describe('GetProductosClientesService', () => {
  let service: GetProductosClientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductosClientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
