import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasRegistradasComponent } from './tarjetas-registradas.component';

describe('TarjetasRegistradasComponent', () => {
  let component: TarjetasRegistradasComponent;
  let fixture: ComponentFixture<TarjetasRegistradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetasRegistradasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetasRegistradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
