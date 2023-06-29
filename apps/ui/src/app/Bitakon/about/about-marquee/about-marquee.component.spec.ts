import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMarqueeComponent } from './about-marquee.component';

describe('AboutMarqueeComponent', () => {
  let component: AboutMarqueeComponent;
  let fixture: ComponentFixture<AboutMarqueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMarqueeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMarqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
