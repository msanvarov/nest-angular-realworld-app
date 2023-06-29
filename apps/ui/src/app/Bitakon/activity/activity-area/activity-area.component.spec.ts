import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityAreaComponent } from './activity-area.component';

describe('ActivityAreaComponent', () => {
  let component: ActivityAreaComponent;
  let fixture: ComponentFixture<ActivityAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
