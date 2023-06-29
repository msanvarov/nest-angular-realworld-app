import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaAreaComponent } from './cta-area.component';

describe('CtaAreaComponent', () => {
  let component: CtaAreaComponent;
  let fixture: ComponentFixture<CtaAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
