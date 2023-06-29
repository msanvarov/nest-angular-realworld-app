import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderThreeComponent } from './slider-three.component';

describe('SliderThreeComponent', () => {
  let component: SliderThreeComponent;
  let fixture: ComponentFixture<SliderThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
