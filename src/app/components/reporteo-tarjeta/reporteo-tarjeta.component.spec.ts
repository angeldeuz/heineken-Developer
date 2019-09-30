import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteoTarjetaComponent } from './reporteo-tarjeta.component';

describe('ReporteoTarjetaComponent', () => {
  let component: ReporteoTarjetaComponent;
  let fixture: ComponentFixture<ReporteoTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteoTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
