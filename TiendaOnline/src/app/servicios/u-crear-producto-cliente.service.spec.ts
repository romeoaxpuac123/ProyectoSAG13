import { TestBed } from '@angular/core/testing';

import { UCrearProductoClienteService } from './u-crear-producto-cliente.service';

describe('UCrearProductoClienteService', () => {
  let service: UCrearProductoClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UCrearProductoClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
