import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAgregarProductoComponent } from './cliente-agregar-producto.component';

describe('ClienteAgregarProductoComponent', () => {
  let component: ClienteAgregarProductoComponent;
  let fixture: ComponentFixture<ClienteAgregarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteAgregarProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAgregarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
