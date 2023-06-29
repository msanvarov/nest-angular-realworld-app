import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAreaComponent } from './terms-area.component';

describe('TermsAreaComponent', () => {
  let component: TermsAreaComponent;
  let fixture: ComponentFixture<TermsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
