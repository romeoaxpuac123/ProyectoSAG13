import { TestBed } from '@angular/core/testing';

import { URegistroClienteService } from './u-registro-cliente.service';

describe('URegistroClienteService', () => {
  let service: URegistroClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(URegistroClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
