import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTwoComponent } from './header-two.component';

describe('HeaderTwoComponent', () => {
  let component: HeaderTwoComponent;
  let fixture: ComponentFixture<HeaderTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
