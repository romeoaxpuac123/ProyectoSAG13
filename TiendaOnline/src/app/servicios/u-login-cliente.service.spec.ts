import { TestBed } from '@angular/core/testing';

import { ULoginClienteService } from './u-login-cliente.service';

describe('ULoginClienteService', () => {
  let service: ULoginClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ULoginClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
