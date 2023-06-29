import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorListTwoAreaComponent } from './creator-list-two-area.component';

describe('CreatorListTwoAreaComponent', () => {
  let component: CreatorListTwoAreaComponent;
  let fixture: ComponentFixture<CreatorListTwoAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorListTwoAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorListTwoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
