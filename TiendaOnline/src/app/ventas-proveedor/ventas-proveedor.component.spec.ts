import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasProveedorComponent } from './ventas-proveedor.component';

describe('VentasProveedorComponent', () => {
  let component: VentasProveedorComponent;
  let fixture: ComponentFixture<VentasProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
