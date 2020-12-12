import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaClienteComponent } from './pantalla-cliente.component';

describe('PantallaClienteComponent', () => {
  let component: PantallaClienteComponent;
  let fixture: ComponentFixture<PantallaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantallaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
