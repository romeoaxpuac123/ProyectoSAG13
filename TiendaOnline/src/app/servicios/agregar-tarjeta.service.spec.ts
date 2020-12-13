import { TestBed } from '@angular/core/testing';

import { AgregarTarjetaService } from './agregar-tarjeta.service';

describe('AgregarTarjetaService', () => {
  let service: AgregarTarjetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarTarjetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
