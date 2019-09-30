import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaNMComponent } from './grafica-nm.component';

describe('GraficaNMComponent', () => {
  let component: GraficaNMComponent;
  let fixture: ComponentFixture<GraficaNMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficaNMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaNMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
