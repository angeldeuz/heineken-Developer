import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTarjetaComponent } from './registro-tarjeta.component';

describe('RegistroTarjetaComponent', () => {
  let component: RegistroTarjetaComponent;
  let fixture: ComponentFixture<RegistroTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
