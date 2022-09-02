import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraderegistrationpageComponent } from './graderegistrationpage.component';

describe('GraderegistrationpageComponent', () => {
  let component: GraderegistrationpageComponent;
  let fixture: ComponentFixture<GraderegistrationpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraderegistrationpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraderegistrationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
