import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgradespageComponent } from './viewgradespage.component';

describe('ViewgradespageComponent', () => {
  let component: ViewgradespageComponent;
  let fixture: ComponentFixture<ViewgradespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewgradespageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewgradespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
