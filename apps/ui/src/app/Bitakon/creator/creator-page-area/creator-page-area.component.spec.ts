import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorPageAreaComponent } from './creator-page-area.component';

describe('CreatorPageAreaComponent', () => {
  let component: CreatorPageAreaComponent;
  let fixture: ComponentFixture<CreatorPageAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorPageAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorPageAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
