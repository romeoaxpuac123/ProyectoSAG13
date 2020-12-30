import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UNavBarClienteComponent } from './u-nav-bar-cliente.component';

describe('UNavBarClienteComponent', () => {
  let component: UNavBarClienteComponent;
  let fixture: ComponentFixture<UNavBarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UNavBarClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UNavBarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
