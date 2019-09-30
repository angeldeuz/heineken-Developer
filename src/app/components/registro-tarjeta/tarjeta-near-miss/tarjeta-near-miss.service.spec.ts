import { TestBed } from '@angular/core/testing';

import { TarjetaNearMissService } from './tarjeta-near-miss.service';

describe('TarjetaNearMissService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TarjetaNearMissService = TestBed.get(TarjetaNearMissService);
    expect(service).toBeTruthy();
  });
});
