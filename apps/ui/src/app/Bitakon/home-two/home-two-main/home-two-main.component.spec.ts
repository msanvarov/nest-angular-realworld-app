import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTwoMainComponent } from './home-two-main.component';

describe('HomeTwoMainComponent', () => {
  let component: HomeTwoMainComponent;
  let fixture: ComponentFixture<HomeTwoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTwoMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTwoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
