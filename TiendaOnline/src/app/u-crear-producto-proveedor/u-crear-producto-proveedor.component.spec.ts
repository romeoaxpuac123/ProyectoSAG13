import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UCrearProductoProveedorComponent } from './u-crear-producto-proveedor.component';

describe('UCrearProductoProveedorComponent', () => {
  let component: UCrearProductoProveedorComponent;
  let fixture: ComponentFixture<UCrearProductoProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UCrearProductoProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UCrearProductoProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
