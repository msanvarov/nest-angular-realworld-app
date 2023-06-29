import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorGridMainComponent } from './creator-grid-main.component';

describe('CreatorGridMainComponent', () => {
  let component: CreatorGridMainComponent;
  let fixture: ComponentFixture<CreatorGridMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorGridMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorGridMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
