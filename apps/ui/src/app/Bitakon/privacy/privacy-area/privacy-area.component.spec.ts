import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyAreaComponent } from './privacy-area.component';

describe('PrivacyAreaComponent', () => {
  let component: PrivacyAreaComponent;
  let fixture: ComponentFixture<PrivacyAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
