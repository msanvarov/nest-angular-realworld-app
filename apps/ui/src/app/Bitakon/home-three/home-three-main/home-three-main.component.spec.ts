import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeThreeMainComponent } from './home-three-main.component';

describe('HomeThreeMainComponent', () => {
  let component: HomeThreeMainComponent;
  let fixture: ComponentFixture<HomeThreeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeThreeMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeThreeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
