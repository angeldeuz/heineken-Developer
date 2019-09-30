
import { FiltroTarjetaComponent } from './filtro-tarjeta.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
describe('FiltroTarjetaComponent', () => {
  let component: FiltroTarjetaComponent;
  let fixture: ComponentFixture<FiltroTarjetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroTarjetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

