import { TestBed } from '@angular/core/testing';

import { TvShowRestService } from './tv-show.rest.service';

describe('TvShowRestService', () => {
  let service: TvShowRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvShowRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
