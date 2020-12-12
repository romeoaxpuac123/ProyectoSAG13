import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarProveedorComponent } from './nav-bar-proveedor.component';

describe('NavBarProveedorComponent', () => {
  let component: NavBarProveedorComponent;
  let fixture: ComponentFixture<NavBarProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
