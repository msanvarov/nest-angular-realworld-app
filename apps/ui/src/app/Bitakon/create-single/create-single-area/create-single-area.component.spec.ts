import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSingleAreaComponent } from './create-single-area.component';

describe('CreateSingleAreaComponent', () => {
  let component: CreateSingleAreaComponent;
  let fixture: ComponentFixture<CreateSingleAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSingleAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSingleAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
