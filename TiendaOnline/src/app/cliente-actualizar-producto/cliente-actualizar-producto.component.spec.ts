import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteActualizarProductoComponent } from './cliente-actualizar-producto.component';

describe('ClienteActualizarProductoComponent', () => {
  let component: ClienteActualizarProductoComponent;
  let fixture: ComponentFixture<ClienteActualizarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteActualizarProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteActualizarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
