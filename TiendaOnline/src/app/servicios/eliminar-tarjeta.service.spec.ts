import { TestBed } from '@angular/core/testing';

import { EliminarTarjetaService } from './eliminar-tarjeta.service';

describe('EliminarTarjetaService', () => {
  let service: EliminarTarjetaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliminarTarjetaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
