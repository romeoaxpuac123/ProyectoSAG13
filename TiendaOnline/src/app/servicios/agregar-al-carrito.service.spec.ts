import { TestBed } from '@angular/core/testing';

import { AgregarAlCarritoService } from './agregar-al-carrito.service';

describe('AgregarAlCarritoService', () => {
  let service: AgregarAlCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarAlCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
