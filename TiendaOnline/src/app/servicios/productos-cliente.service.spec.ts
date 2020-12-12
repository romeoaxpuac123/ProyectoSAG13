import { TestBed } from '@angular/core/testing';

import { ProductosClienteService } from './productos-cliente.service';

describe('ProductosClienteService', () => {
  let service: ProductosClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
