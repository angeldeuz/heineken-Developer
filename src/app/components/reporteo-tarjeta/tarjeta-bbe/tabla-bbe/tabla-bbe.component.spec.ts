import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaBbeComponent } from './tabla-bbe.component';

describe('TablaBbeComponent', () => {
  let component: TablaBbeComponent;
  let fixture: ComponentFixture<TablaBbeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaBbeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaBbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
