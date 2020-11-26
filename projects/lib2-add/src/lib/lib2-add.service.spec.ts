import { TestBed } from '@angular/core/testing';

import { Lib2AddService } from './lib2-add.service';

describe('Lib2AddService', () => {
  let service: Lib2AddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Lib2AddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
