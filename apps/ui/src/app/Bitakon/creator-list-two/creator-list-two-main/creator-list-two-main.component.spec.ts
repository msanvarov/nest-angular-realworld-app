import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorListTwoMainComponent } from './creator-list-two-main.component';

describe('CreatorListTwoMainComponent', () => {
  let component: CreatorListTwoMainComponent;
  let fixture: ComponentFixture<CreatorListTwoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorListTwoMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorListTwoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
