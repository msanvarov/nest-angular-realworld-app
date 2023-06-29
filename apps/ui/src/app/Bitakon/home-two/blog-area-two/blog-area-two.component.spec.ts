import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAreaTwoComponent } from './blog-area-two.component';

describe('BlogAreaTwoComponent', () => {
  let component: BlogAreaTwoComponent;
  let fixture: ComponentFixture<BlogAreaTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogAreaTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAreaTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
