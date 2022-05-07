import { TestBed } from '@angular/core/testing';

import { Question5Service } from './question5.service';

describe('Question5Service', () => {
  let service: Question5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Question5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
