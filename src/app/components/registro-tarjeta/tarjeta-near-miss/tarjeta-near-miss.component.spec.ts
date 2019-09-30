import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaNearMissComponent } from './tarjeta-near-miss.component';

describe('TarjetaNearMissComponent', () => {
  let component: TarjetaNearMissComponent;
  let fixture: ComponentFixture<TarjetaNearMissComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaNearMissComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaNearMissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
