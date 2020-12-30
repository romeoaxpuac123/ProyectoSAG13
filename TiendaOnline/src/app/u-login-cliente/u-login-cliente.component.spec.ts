import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ULoginClienteComponent } from './u-login-cliente.component';

describe('ULoginClienteComponent', () => {
  let component: ULoginClienteComponent;
  let fixture: ComponentFixture<ULoginClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ULoginClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ULoginClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
