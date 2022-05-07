import { TestBed } from '@angular/core/testing';

import { Question4Service } from './question4.service';

describe('Question4Service', () => {
  let service: Question4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Question4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
