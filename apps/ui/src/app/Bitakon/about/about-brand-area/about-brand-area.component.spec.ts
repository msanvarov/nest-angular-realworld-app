import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBrandAreaComponent } from './about-brand-area.component';

describe('AboutBrandAreaComponent', () => {
  let component: AboutBrandAreaComponent;
  let fixture: ComponentFixture<AboutBrandAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBrandAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBrandAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
