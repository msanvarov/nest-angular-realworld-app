import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorGridAreaComponent } from './creator-grid-area.component';

describe('CreatorGridAreaComponent', () => {
  let component: CreatorGridAreaComponent;
  let fixture: ComponentFixture<CreatorGridAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorGridAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorGridAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
