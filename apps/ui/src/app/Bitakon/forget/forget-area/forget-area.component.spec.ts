import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetAreaComponent } from './forget-area.component';

describe('ForgetAreaComponent', () => {
  let component: ForgetAreaComponent;
  let fixture: ComponentFixture<ForgetAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
