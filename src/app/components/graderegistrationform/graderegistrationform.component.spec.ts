import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraderegistrationformComponent } from './graderegistrationform.component';

describe('GraderegistrationformComponent', () => {
  let component: GraderegistrationformComponent;
  let fixture: ComponentFixture<GraderegistrationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraderegistrationformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraderegistrationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
