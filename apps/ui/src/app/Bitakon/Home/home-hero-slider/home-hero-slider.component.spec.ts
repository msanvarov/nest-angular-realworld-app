import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeroSliderComponent } from './home-hero-slider.component';

describe('HomeHeroSliderComponent', () => {
  let component: HomeHeroSliderComponent;
  let fixture: ComponentFixture<HomeHeroSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeHeroSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHeroSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
