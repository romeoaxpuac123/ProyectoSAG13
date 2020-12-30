import { TestBed } from '@angular/core/testing';

import { VentasClienteService } from './ventas-cliente.service';

describe('VentasClienteService', () => {
  let service: VentasClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentasClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
