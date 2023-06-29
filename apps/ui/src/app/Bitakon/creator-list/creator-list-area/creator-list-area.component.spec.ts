import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorListAreaComponent } from './creator-list-area.component';

describe('CreatorListAreaComponent', () => {
  let component: CreatorListAreaComponent;
  let fixture: ComponentFixture<CreatorListAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorListAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorListAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
