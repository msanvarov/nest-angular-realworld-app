import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyMainComponent } from './privacy-main.component';

describe('PrivacyMainComponent', () => {
  let component: PrivacyMainComponent;
  let fixture: ComponentFixture<PrivacyMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
