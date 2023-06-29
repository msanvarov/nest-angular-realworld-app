import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSingleMainComponent } from './create-single-main.component';

describe('CreateSingleMainComponent', () => {
  let component: CreateSingleMainComponent;
  let fixture: ComponentFixture<CreateSingleMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSingleMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSingleMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
