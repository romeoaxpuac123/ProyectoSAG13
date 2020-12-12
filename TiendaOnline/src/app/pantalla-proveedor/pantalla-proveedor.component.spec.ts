import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaProveedorComponent } from './pantalla-proveedor.component';

describe('PantallaProveedorComponent', () => {
  let component: PantallaProveedorComponent;
  let fixture: ComponentFixture<PantallaProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
