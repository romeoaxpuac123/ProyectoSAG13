import { TestBed } from '@angular/core/testing';

import { UVerProductosService } from './u-ver-productos.service';

describe('UVerProductosService', () => {
  let service: UVerProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UVerProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
