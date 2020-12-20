import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosFacturaComponent } from './datos-factura.component';

describe('DatosFacturaComponent', () => {
  let component: DatosFacturaComponent;
  let fixture: ComponentFixture<DatosFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosFacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
