import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsAreaComponent } from './blog-details-area.component';

describe('BlogDetailsAreaComponent', () => {
  let component: BlogDetailsAreaComponent;
  let fixture: ComponentFixture<BlogDetailsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDetailsAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
