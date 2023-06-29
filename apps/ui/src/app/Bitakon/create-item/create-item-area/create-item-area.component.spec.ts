import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateItemAreaComponent } from './create-item-area.component';

describe('CreateItemAreaComponent', () => {
  let component: CreateItemAreaComponent;
  let fixture: ComponentFixture<CreateItemAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateItemAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateItemAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
