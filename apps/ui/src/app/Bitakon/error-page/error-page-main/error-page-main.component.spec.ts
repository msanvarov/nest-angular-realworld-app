import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPageMainComponent } from './error-page-main.component';

describe('ErrorPageMainComponent', () => {
  let component: ErrorPageMainComponent;
  let fixture: ComponentFixture<ErrorPageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPageMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
