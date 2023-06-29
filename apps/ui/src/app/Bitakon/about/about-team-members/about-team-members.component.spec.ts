import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTeamMembersComponent } from './about-team-members.component';

describe('AboutTeamMembersComponent', () => {
  let component: AboutTeamMembersComponent;
  let fixture: ComponentFixture<AboutTeamMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTeamMembersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTeamMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
