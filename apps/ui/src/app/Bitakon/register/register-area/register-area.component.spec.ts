import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAreaComponent } from './register-area.component';

describe('RegisterAreaComponent', () => {
  let component: RegisterAreaComponent;
  let fixture: ComponentFixture<RegisterAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
