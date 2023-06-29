import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityMainComponent } from './activity-main.component';

describe('ActivityMainComponent', () => {
  let component: ActivityMainComponent;
  let fixture: ComponentFixture<ActivityMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
