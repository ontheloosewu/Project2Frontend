import { TestBed } from '@angular/core/testing';

import { StudentUtilService } from './student-util.service';

describe('StudentUtilService', () => {
  let service: StudentUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
