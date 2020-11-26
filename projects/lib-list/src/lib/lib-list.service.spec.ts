import { TestBed } from '@angular/core/testing';

import { LibListService } from './lib-list.service';

describe('LibListService', () => {
  let service: LibListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
