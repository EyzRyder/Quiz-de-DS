import { TestBed } from '@angular/core/testing';

import { Question2Service } from './question2.service';

describe('Question2Service', () => {
  let service: Question2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Question2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
