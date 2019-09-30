import { TestBed } from '@angular/core/testing';

import { ExportacionTarjetaService } from './exportacion-tarjeta.service';

describe('ExportacionTarjetaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExportacionTarjetaService = TestBed.get(ExportacionTarjetaService);
    expect(service).toBeTruthy();
  });
});
