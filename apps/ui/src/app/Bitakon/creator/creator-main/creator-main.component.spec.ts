import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorMainComponent } from './creator-main.component';

describe('CreatorMainComponent', () => {
  let component: CreatorMainComponent;
  let fixture: ComponentFixture<CreatorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
