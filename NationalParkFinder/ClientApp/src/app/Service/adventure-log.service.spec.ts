import { TestBed } from '@angular/core/testing';

import { AdventureLogService } from './adventure-log.service';

describe('AdventureLogService', () => {
  let service: AdventureLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdventureLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
