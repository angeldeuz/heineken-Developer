import { TestBed } from '@angular/core/testing';

import { ReporteoTarjetaService } from './reporteo-tarjeta.service';

describe('ReporteoTarjetaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReporteoTarjetaService = TestBed.get(ReporteoTarjetaService);
    expect(service).toBeTruthy();
    
  });
});
