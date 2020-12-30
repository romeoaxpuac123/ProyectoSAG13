import { ComponentFixture, TestBed } from '@angular/core/testing';

import { URegistroClienteComponent } from './u-registro-cliente.component';

describe('URegistroClienteComponent', () => {
  let component: URegistroClienteComponent;
  let fixture: ComponentFixture<URegistroClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ URegistroClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(URegistroClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
