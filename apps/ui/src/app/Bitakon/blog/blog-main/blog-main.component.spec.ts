import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMainComponent } from './blog-main.component';

describe('BlogMainComponent', () => {
  let component: BlogMainComponent;
  let fixture: ComponentFixture<BlogMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
