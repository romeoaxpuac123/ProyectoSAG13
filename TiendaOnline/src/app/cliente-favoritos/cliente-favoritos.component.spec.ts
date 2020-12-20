import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFavoritosComponent } from './cliente-favoritos.component';

describe('ClienteFavoritosComponent', () => {
  let component: ClienteFavoritosComponent;
  let fixture: ComponentFixture<ClienteFavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteFavoritosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
