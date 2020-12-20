import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEliminarProductoComponent } from './cliente-eliminar-producto.component';

describe('ClienteEliminarProductoComponent', () => {
  let component: ClienteEliminarProductoComponent;
  let fixture: ComponentFixture<ClienteEliminarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteEliminarProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteEliminarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
