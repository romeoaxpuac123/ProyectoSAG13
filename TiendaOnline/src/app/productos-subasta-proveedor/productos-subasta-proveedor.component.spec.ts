import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosSubastaProveedorComponent } from './productos-subasta-proveedor.component';

describe('ProductosSubastaProveedorComponent', () => {
  let component: ProductosSubastaProveedorComponent;
  let fixture: ComponentFixture<ProductosSubastaProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosSubastaProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosSubastaProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
