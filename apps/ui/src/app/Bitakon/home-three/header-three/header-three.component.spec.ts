import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderThreeComponent } from './header-three.component';

describe('HeaderThreeComponent', () => {
  let component: HeaderThreeComponent;
  let fixture: ComponentFixture<HeaderThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
