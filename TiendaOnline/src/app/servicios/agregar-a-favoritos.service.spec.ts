import { TestBed } from '@angular/core/testing';

import { AgregarAFavoritosService } from './agregar-a-favoritos.service';

describe('AgregarAFavoritosService', () => {
  let service: AgregarAFavoritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarAFavoritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
