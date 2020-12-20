import { TestBed } from '@angular/core/testing';

import { OfertasClienteService } from './ofertas-cliente.service';

describe('OfertasClienteService', () => {
  let service: OfertasClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfertasClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
