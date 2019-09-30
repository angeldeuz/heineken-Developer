import { TestBed } from '@angular/core/testing';

import { RegistroTarjetaService } from './registro-tarjeta.service';

describe('RegistroTarjetaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistroTarjetaService = TestBed.get(RegistroTarjetaService);
    expect(service).toBeTruthy();
  });
});
