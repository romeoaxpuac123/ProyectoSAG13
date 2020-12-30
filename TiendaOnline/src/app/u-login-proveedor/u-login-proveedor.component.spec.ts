import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ULoginProveedorComponent } from './u-login-proveedor.component';

describe('ULoginProveedorComponent', () => {
  let component: ULoginProveedorComponent;
  let fixture: ComponentFixture<ULoginProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ULoginProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ULoginProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
