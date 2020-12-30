import { ComponentFixture, TestBed } from '@angular/core/testing';

import { URegistroProveedorComponent } from './u-registro-proveedor.component';

describe('URegistroProveedorComponent', () => {
  let component: URegistroProveedorComponent;
  let fixture: ComponentFixture<URegistroProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ URegistroProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(URegistroProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
