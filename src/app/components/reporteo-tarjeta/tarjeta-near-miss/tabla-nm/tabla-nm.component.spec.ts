import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaNMComponent } from './tabla-nm.component';

describe('TablaNMComponent', () => {
  let component: TablaNMComponent;
  let fixture: ComponentFixture<TablaNMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaNMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaNMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
