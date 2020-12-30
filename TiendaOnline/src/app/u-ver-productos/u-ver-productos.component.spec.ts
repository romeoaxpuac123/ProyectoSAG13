import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UVerProductosComponent } from './u-ver-productos.component';

describe('UVerProductosComponent', () => {
  let component: UVerProductosComponent;
  let fixture: ComponentFixture<UVerProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UVerProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UVerProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
