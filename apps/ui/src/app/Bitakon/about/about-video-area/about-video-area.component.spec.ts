import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutVideoAreaComponent } from './about-video-area.component';

describe('AboutVideoAreaComponent', () => {
  let component: AboutVideoAreaComponent;
  let fixture: ComponentFixture<AboutVideoAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutVideoAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutVideoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
