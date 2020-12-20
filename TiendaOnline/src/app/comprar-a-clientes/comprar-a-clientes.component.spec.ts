import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarAClientesComponent } from './comprar-a-clientes.component';

describe('ComprarAClientesComponent', () => {
  let component: ComprarAClientesComponent;
  let fixture: ComponentFixture<ComprarAClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarAClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarAClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
