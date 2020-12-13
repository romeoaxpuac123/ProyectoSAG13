import { TestBed } from '@angular/core/testing';

import { TarjetasRegistradasService } from './tarjetas-registradas.service';

describe('TarjetasRegistradasService', () => {
  let service: TarjetasRegistradasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarjetasRegistradasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
