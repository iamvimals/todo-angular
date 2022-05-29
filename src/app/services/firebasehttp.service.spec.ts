import { TestBed } from '@angular/core/testing';

import { FirebasehttpService } from './firebasehttp.service';

describe('FirebasehttpService', () => {
  let service: FirebasehttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebasehttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
