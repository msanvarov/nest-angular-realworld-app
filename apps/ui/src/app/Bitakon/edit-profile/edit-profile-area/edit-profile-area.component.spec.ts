import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileAreaComponent } from './edit-profile-area.component';

describe('EditProfileAreaComponent', () => {
  let component: EditProfileAreaComponent;
  let fixture: ComponentFixture<EditProfileAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
