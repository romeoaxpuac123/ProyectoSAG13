import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UCrearProductoClienteComponent } from './u-crear-producto-cliente.component';

describe('UCrearProductoClienteComponent', () => {
  let component: UCrearProductoClienteComponent;
  let fixture: ComponentFixture<UCrearProductoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UCrearProductoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UCrearProductoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
