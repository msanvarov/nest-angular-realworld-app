import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsMainComponent } from './terms-main.component';

describe('TermsMainComponent', () => {
  let component: TermsMainComponent;
  let fixture: ComponentFixture<TermsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
