import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaBBEComponent } from './tarjeta-bbe.component';

describe('TarjetaBBEComponent', () => {
  let component: TarjetaBBEComponent;
  let fixture: ComponentFixture<TarjetaBBEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaBBEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaBBEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
