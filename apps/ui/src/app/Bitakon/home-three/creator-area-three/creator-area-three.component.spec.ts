import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorAreaThreeComponent } from './creator-area-three.component';

describe('CreatorAreaThreeComponent', () => {
  let component: CreatorAreaThreeComponent;
  let fixture: ComponentFixture<CreatorAreaThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorAreaThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorAreaThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
