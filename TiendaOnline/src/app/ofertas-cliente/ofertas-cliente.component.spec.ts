import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasClienteComponent } from './ofertas-cliente.component';

describe('OfertasClienteComponent', () => {
  let component: OfertasClienteComponent;
  let fixture: ComponentFixture<OfertasClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertasClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
