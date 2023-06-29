import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetMainComponent } from './forget-main.component';

describe('ForgetMainComponent', () => {
  let component: ForgetMainComponent;
  let fixture: ComponentFixture<ForgetMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
