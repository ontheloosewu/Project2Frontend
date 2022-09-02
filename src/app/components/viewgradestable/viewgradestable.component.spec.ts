import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgradestableComponent } from './viewgradestable.component';

describe('ViewgradestableComponent', () => {
  let component: ViewgradestableComponent;
  let fixture: ComponentFixture<ViewgradestableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewgradestableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewgradestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
