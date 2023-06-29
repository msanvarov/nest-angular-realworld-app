import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemMainComponent } from './create-item-main.component';

describe('CreateItemMainComponent', () => {
  let component: CreateItemMainComponent;
  let fixture: ComponentFixture<CreateItemMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateItemMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateItemMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
