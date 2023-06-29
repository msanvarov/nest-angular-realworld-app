import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportFaqAreaComponent } from './support-faq-area.component';

describe('SupportFaqAreaComponent', () => {
  let component: SupportFaqAreaComponent;
  let fixture: ComponentFixture<SupportFaqAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportFaqAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportFaqAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
