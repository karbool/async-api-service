import { TestBed } from '@angular/core/testing';

import { WyszukiwanieService } from './wyszukiwanie.service';

describe('WyszukiwanieService', () => {
  let service: WyszukiwanieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WyszukiwanieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
