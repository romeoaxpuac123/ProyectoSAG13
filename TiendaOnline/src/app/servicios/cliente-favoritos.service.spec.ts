import { TestBed } from '@angular/core/testing';

import { ClienteFavoritosService } from './cliente-favoritos.service';

describe('ClienteFavoritosService', () => {
  let service: ClienteFavoritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteFavoritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
