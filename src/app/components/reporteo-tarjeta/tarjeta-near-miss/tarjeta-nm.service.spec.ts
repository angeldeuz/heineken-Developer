import { TestBed } from '@angular/core/testing';

import { TarjetaNMService } from './tarjeta-nm.service';

describe('TarjetaBbeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TarjetaNMService = TestBed.get(TarjetaNMService);
    expect(service).toBeTruthy();
  });
});
