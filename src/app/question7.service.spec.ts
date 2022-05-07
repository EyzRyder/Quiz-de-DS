import { TestBed } from '@angular/core/testing';

import { Question7Service } from './question7.service';

describe('Question7Service', () => {
  let service: Question7Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Question7Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
