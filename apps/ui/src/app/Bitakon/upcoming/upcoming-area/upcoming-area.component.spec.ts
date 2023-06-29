import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingAreaComponent } from './upcoming-area.component';

describe('UpcomingAreaComponent', () => {
  let component: UpcomingAreaComponent;
  let fixture: ComponentFixture<UpcomingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
