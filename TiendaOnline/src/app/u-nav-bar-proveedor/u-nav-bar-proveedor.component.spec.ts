import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UNavBarProveedorComponent } from './u-nav-bar-proveedor.component';

describe('UNavBarProveedorComponent', () => {
  let component: UNavBarProveedorComponent;
  let fixture: ComponentFixture<UNavBarProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UNavBarProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UNavBarProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
