import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMissionAreaComponent } from './about-mission-area.component';

describe('AboutMissionAreaComponent', () => {
  let component: AboutMissionAreaComponent;
  let fixture: ComponentFixture<AboutMissionAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMissionAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMissionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
