import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingMainComponent } from './upcoming-main.component';

describe('UpcomingMainComponent', () => {
  let component: UpcomingMainComponent;
  let fixture: ComponentFixture<UpcomingMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
