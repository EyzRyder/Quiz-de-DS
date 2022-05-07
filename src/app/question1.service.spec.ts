import { TestBed } from '@angular/core/testing';

import { Question1Service } from './question1.service';

describe('Question1Service', () => {
  let service: Question1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Question1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
