import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteoTarjetaBbeComponent } from './tarjeta-bbe.component';

describe('TarjetaBBEComponent', () => {
  let component: ReporteoTarjetaBbeComponent;
  let fixture: ComponentFixture<ReporteoTarjetaBbeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteoTarjetaBbeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteoTarjetaBbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
