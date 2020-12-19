import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarAProveedoresComponent } from './comprar-a-proveedores.component';

describe('ComprarAProveedoresComponent', () => {
  let component: ComprarAProveedoresComponent;
  let fixture: ComponentFixture<ComprarAProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprarAProveedoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarAProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
