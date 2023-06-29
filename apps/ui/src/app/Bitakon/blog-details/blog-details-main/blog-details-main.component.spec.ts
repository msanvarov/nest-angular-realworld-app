import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsMainComponent } from './blog-details-main.component';

describe('BlogDetailsMainComponent', () => {
  let component: BlogDetailsMainComponent;
  let fixture: ComponentFixture<BlogDetailsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDetailsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
