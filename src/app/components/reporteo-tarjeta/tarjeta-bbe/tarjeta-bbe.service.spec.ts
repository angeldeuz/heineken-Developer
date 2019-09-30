import { TestBed } from '@angular/core/testing';

import { TarjetaBbeService } from './tarjeta-bbe.service';

describe('TarjetaBbeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TarjetaBbeService = TestBed.get(TarjetaBbeService);
    expect(service).toBeTruthy();
  });
});
