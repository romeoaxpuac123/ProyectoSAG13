import { TestBed } from '@angular/core/testing';

import { ProductosSubastaClienteService } from './productos-subasta-cliente.service';

describe('ProductosSubastaClienteService', () => {
  let service: ProductosSubastaClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosSubastaClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
