import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterThreeComponent } from './footer-three.component';

describe('FooterThreeComponent', () => {
  let component: FooterThreeComponent;
  let fixture: ComponentFixture<FooterThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
