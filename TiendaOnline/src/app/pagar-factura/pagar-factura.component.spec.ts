import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagarFacturaComponent } from './pagar-factura.component';

describe('PagarFacturaComponent', () => {
  let component: PagarFacturaComponent;
  let fixture: ComponentFixture<PagarFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagarFacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagarFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
