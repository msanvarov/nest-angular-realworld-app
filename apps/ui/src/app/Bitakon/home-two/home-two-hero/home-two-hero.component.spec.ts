import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTwoHeroComponent } from './home-two-hero.component';

describe('HomeTwoHeroComponent', () => {
  let component: HomeTwoHeroComponent;
  let fixture: ComponentFixture<HomeTwoHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTwoHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTwoHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
