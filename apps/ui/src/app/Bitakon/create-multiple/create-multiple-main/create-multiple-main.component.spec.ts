import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMultipleMainComponent } from './create-multiple-main.component';

describe('CreateMultipleMainComponent', () => {
  let component: CreateMultipleMainComponent;
  let fixture: ComponentFixture<CreateMultipleMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMultipleMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMultipleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
