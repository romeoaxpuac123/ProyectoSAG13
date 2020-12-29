import { TestBed } from '@angular/core/testing';

import { DashboardComprasService } from './dashboard-compras.service';

describe('DashboardComprasService', () => {
  let service: DashboardComprasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardComprasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
