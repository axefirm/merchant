import { TestBed } from '@angular/core/testing';

import { EncService } from './enc.service';

describe('EncService', () => {
  let service: EncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
