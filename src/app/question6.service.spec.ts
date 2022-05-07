import { TestBed } from '@angular/core/testing';

import { Question6Service } from './question6.service';

describe('Question6Service', () => {
  let service: Question6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Question6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
