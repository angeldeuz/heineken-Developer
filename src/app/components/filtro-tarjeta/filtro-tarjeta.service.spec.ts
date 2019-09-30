import { TestBed } from '@angular/core/testing';

import { FiltroTarjetaService } from './filtro-tarjeta.service';

describe('FiltroTarjetaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiltroTarjetaService = TestBed.get(FiltroTarjetaService);
    expect(service).toBeTruthy();
  });
});
