import { TestBed } from '@angular/core/testing';

import { Question9Service } from './question9.service';

describe('Question9Service', () => {
  let service: Question9Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Question9Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
