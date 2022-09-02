import { TestBed } from '@angular/core/testing';

import { GradeUtilService } from './grade-util.service';

describe('GradeUtilService', () => {
  let service: GradeUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradeUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
