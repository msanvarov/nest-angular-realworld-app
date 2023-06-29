import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAreaComponent } from './blog-area.component';

describe('BlogAreaComponent', () => {
  let component: BlogAreaComponent;
  let fixture: ComponentFixture<BlogAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
