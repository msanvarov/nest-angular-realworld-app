import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaThreeComponent } from './cta-three.component';

describe('CtaThreeComponent', () => {
  let component: CtaThreeComponent;
  let fixture: ComponentFixture<CtaThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
