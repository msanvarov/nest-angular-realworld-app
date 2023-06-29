import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMultipleAreaComponent } from './create-multiple-area.component';

describe('CreateMultipleAreaComponent', () => {
  let component: CreateMultipleAreaComponent;
  let fixture: ComponentFixture<CreateMultipleAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMultipleAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMultipleAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
