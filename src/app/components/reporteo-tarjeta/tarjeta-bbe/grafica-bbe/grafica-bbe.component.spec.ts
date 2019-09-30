import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaBbeComponent } from './grafica-bbe.component';

describe('GraficaBbeComponent', () => {
  let component: GraficaBbeComponent;
  let fixture: ComponentFixture<GraficaBbeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaBbeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaBbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
