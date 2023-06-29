import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRightSideComponent } from './blog-right-side.component';

describe('BlogRightSideComponent', () => {
  let component: BlogRightSideComponent;
  let fixture: ComponentFixture<BlogRightSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogRightSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
