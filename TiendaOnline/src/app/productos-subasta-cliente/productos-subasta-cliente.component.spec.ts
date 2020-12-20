import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosSubastaClienteComponent } from './productos-subasta-cliente.component';

describe('ProductosSubastaClienteComponent', () => {
  let component: ProductosSubastaClienteComponent;
  let fixture: ComponentFixture<ProductosSubastaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosSubastaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosSubastaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
