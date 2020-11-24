import { TestBed } from '@angular/core/testing';

import { TenderoService } from './tendero.service';

describe('TenderoService', () => {
  let service: TenderoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenderoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
