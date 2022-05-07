import { TestBed } from '@angular/core/testing';

import { Question8Service } from './question8.service';

describe('Question8Service', () => {
  let service: Question8Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Question8Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
