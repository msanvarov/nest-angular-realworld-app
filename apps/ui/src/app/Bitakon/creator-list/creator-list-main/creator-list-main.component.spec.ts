import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorListMainComponent } from './creator-list-main.component';

describe('CreatorListMainComponent', () => {
  let component: CreatorListMainComponent;
  let fixture: ComponentFixture<CreatorListMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorListMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorListMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
