import { TestBed } from '@angular/core/testing';

import { Question3Service } from './question3.service';

describe('Question3Service', () => {
  let service: Question3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Question3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
