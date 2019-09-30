import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportacionTarjetaComponent } from './exportacion-tarjeta.component';

describe('ExportacionTarjetaComponent', () => {
  let component: ExportacionTarjetaComponent;
  let fixture: ComponentFixture<ExportacionTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportacionTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportacionTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
